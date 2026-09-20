/**
 * app/api/leads/route.ts — Lead Capture API Endpoint
 *
 * POST /api/leads
 *
 * Used by: LeadForm, HeroSection form, GlobalConsultationModal, LeadCaptureCard
 *
 * Flow:
 *   1. Parse & validate request body
 *   2. Send email notification via Nodemailer
 *   3. Return JSON response
 */

import { NextRequest, NextResponse } from "next/server";
import { sendContactNotification } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request format." },
      { status: 400 }
    );
  }

  const name    = typeof body.name    === "string" ? body.name.trim()    : "Not provided";
  const phone   = typeof body.phone   === "string" ? body.phone.trim()   : "";
  const email   = typeof body.email   === "string" ? body.email.trim()   : "";
  const service = typeof body.service === "string" ? body.service.trim() :
                  typeof body.serviceSlug === "string" ? body.serviceSlug.trim() : "General Inquiry";
  const message = typeof body.message === "string" ? body.message.trim() : "No message provided";

  // Validate phone number existence and correct format/length (7 to 15 digits)
  if (!phone) {
    return NextResponse.json(
      { success: false, error: "Phone number is required." },
      { status: 400 }
    );
  }

  const phoneDigits = phone.replace(/\D/g, "");
  if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    return NextResponse.json(
      { success: false, error: "Please enter a valid phone number (7-15 digits)." },
      { status: 400 }
    );
  }

  // Validate email if provided
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { success: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  // Build message body — include email if provided
  const fullMessage = [
    email ? `Email: ${email}` : null,
    message,
  ]
    .filter(Boolean)
    .join("\n\n");

  try {
    await sendContactNotification({
      name,
      phone,
      service,
      message: fullMessage,
      submittedAt,
    });
  } catch (emailError) {
    console.error("[/api/leads] Email notification failed:", emailError);
    // Still return success — the lead was captured even if email failed
  }

  return NextResponse.json(
    { success: true, message: "Lead captured. We will contact you shortly." },
    { status: 200 }
  );
}
