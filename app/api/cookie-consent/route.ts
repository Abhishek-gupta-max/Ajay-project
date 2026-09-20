import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action } = body;
    
    // Attempt to capture IP and User-Agent
    const ipAddress = req.headers.get("x-forwarded-for") || req.ip || "unknown";
    const userAgent = req.headers.get("user-agent") || "unknown";

    await prisma.cookieConsent.create({
      data: {
        action: action === "accepted" ? "accepted" : "declined",
        ipAddress: ipAddress.substring(0, 45), // Safeguard against overly long headers
        userAgent: userAgent
      }
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[/api/cookie-consent] Database error:", error);
    // Fail gracefully on the client side since consent is primarily for analytics/records
    return NextResponse.json({ success: true, warning: "Database save skipped" }, { status: 200 });
  }
}
