/**
 * app/api/contact/route.ts — Contact Form API Endpoint
 *
 * POST /api/contact
 *
 * Flow:
 *   1. Parse & validate request body
 *   2. Save submission to MySQL via Prisma
 *   3. Send email notification via Nodemailer (non-blocking on failure)
 *   4. Return JSON response
 *
 * Error strategy:
 *   - DB save failure → 500 (client cannot proceed, data would be lost)
 *   - Email failure → still returns 200 (data is saved; email is best-effort)
 *   - Internal errors are logged server-side; safe messages sent to client
 */

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendContactNotification } from "@/lib/mailer";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ContactBody {
  name: unknown;
  phone: unknown;
  email: unknown;
  service: unknown;
  message: unknown;
}

// ─── Validation helper ────────────────────────────────────────────────────────
function validateBody(body: ContactBody): string | null {
  const { name, phone, service, email } = body;

  if (!name || !phone || !service) {
    return "Name, phone, and service are required fields.";
  }
  if (typeof name !== "string" || name.trim().length < 2) {
    return "Please enter a valid full name (at least 2 characters).";
  }
  if (typeof phone !== "string" || !/^[\d\s\+\-\(\)]{7,20}$/.test(phone.trim())) {
    return "Please enter a valid phone number.";
  }
  if (typeof service !== "string" || service.trim().length === 0) {
    return "Please select a service.";
  }
  if (email && (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))) {
    return "Please enter a valid email address.";
  }
  return null; // valid
}

// ─── POST handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // 1. Parse body
  let body: ContactBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request format." },
      { status: 400 }
    );
  }

  // 2. Validate
  const validationError = validateBody(body);
  if (validationError) {
    return NextResponse.json(
      { success: false, error: validationError },
      { status: 400 }
    );
  }

  const name = (body.name as string).trim();
  const phone = (body.phone as string).trim();
  const service = (body.service as string).trim();
  const email = typeof body.email === "string" ? body.email.trim() : "";
  let message = typeof body.message === "string" ? body.message.trim() : "";
  
  if (!message) {
    message = "No message provided";
  }
  
  const finalMessage = email ? `[Email: ${email}]\n\n${message}` : message;

  // 3. Save to database (non-blocking)
  let submissionId: number | undefined;
  try {
    const submission = await prisma.contactSubmission.create({
      data: { name, phone, service, message: finalMessage },
      select: { id: true },
    });
    submissionId = submission.id;
  } catch (dbError) {
    console.error("[/api/contact] Database error:", dbError);
    // Proceed to email notification even if database save fails
  }

  // 4. Send email notification (best-effort)
  try {
    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    await sendContactNotification({
      name,
      phone,
      service,
      message: finalMessage,
      submittedAt,
    });
  } catch (emailError) {
    console.error("[/api/contact] Email notification failed:", emailError);
  }

  // 5. Success
  return NextResponse.json(
    {
      success: true,
      message: "Inquiry submitted successfully. We will contact you shortly.",
      id: submissionId,
    },
    { status: 200 }
  );
}
