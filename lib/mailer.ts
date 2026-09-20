/**
 * lib/mailer.ts — Nodemailer SMTP transporter for Hostinger
 *
 * SMTP Settings used: smtp.hostinger.com:465 (SSL)
 * Lazy transporter: created on first use to avoid startup errors if env vars
 * are missing (e.g. during build time on Hostinger).
 */

import nodemailer, { Transporter } from "nodemailer";

// ─── Types ────────────────────────────────────────────────────────────────────
export interface ContactEmailData {
  name: string;
  phone: string;
  service: string;
  message: string;
  submittedAt: string;
}

// ─── Lazy transporter (created on first send, not at module load) ─────────────
// This prevents "missing env var" errors at build time when env is not loaded.
let _transporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (_transporter) return _transporter;

  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT ?? "465", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      "[Mailer] SMTP configuration is incomplete. " +
      "Check SMTP_HOST, SMTP_USER, SMTP_PASS in your .env file."
    );
  }

  _transporter = nodemailer.createTransport({
    host,
    port,
    // Port 465 → SSL (secure: true) | Port 587 → TLS (secure: false)
    secure: port === 465,
    auth: { user, pass },
    // Connection timeouts (ms) — important for shared hosting
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
    tls: {
      // Allow self-signed certs on some Hostinger SMTP configs
      rejectUnauthorized: false,
    },
  });

  return _transporter;
}

// ─── Email HTML template ──────────────────────────────────────────────────────
function buildEmailHtml(data: ContactEmailData): string {
  const { name, phone, service, message, submittedAt } = data;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Inquiry</title>
</head>
<body style="margin:0;padding:0;background:#f4f6fb;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0"
          style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a3c5e 0%,#f07025 100%);padding:32px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;letter-spacing:-0.5px;">
                &#x1F4CB; New Contact Inquiry
              </h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:14px;">
                AJ Legal Consultant &#x2014; Website Lead
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">
              <p style="margin:0 0 24px;color:#374151;font-size:15px;">
                Hello, a new consultation request has been submitted on your website. Here are the details:
              </p>

              <!-- Details -->
              <table width="100%" cellpadding="0" cellspacing="0"
                style="border-collapse:collapse;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
                <tr style="background:#f9fafb;">
                  <td style="padding:14px 20px;font-weight:600;color:#6b7280;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #e5e7eb;width:35%;">Full Name</td>
                  <td style="padding:14px 20px;color:#111827;font-size:15px;font-weight:500;border-bottom:1px solid #e5e7eb;">${name}</td>
                </tr>
                <tr>
                  <td style="padding:14px 20px;font-weight:600;color:#6b7280;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #e5e7eb;">Phone</td>
                  <td style="padding:14px 20px;border-bottom:1px solid #e5e7eb;">
                    <a href="tel:${phone}" style="color:#f07025;text-decoration:none;font-weight:600;font-size:15px;">${phone}</a>
                  </td>
                </tr>
                <tr style="background:#f9fafb;">
                  <td style="padding:14px 20px;font-weight:600;color:#6b7280;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #e5e7eb;">Service</td>
                  <td style="padding:14px 20px;border-bottom:1px solid #e5e7eb;">
                    <span style="background:#fef3c7;color:#92400e;padding:4px 12px;border-radius:999px;font-size:13px;font-weight:600;">${service}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 20px;font-weight:600;color:#6b7280;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Message</td>
                  <td style="padding:14px 20px;color:#374151;font-size:15px;line-height:1.6;">${message}</td>
                </tr>
              </table>

              <!-- CTA button -->
              <div style="margin:28px 0 0;text-align:center;">
                <a href="tel:${phone}"
                  style="display:inline-block;background:linear-gradient(135deg,#f07025,#e05a10);color:#ffffff;font-weight:700;font-size:15px;padding:14px 32px;border-radius:10px;text-decoration:none;box-shadow:0 4px 14px rgba(240,112,37,0.4);">
                  &#x1F4DE; Call Client Now
                </a>
              </div>

              <p style="margin:24px 0 0;text-align:center;color:#9ca3af;font-size:12px;">
                Submitted on ${submittedAt}
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb;padding:20px 40px;text-align:center;border-top:1px solid #e5e7eb;">
              <p style="margin:0;color:#9ca3af;font-size:12px;">
                This email was automatically generated from your AJ Legal Consultant website contact form.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Main send function ───────────────────────────────────────────────────────
export async function sendContactNotification(
  data: ContactEmailData
): Promise<void> {
  // Primary recipient — set via env var on the server
  const primaryEmail =
    process.env.NOTIFICATION_EMAIL ?? "info@ajlegalconsultant.com";

  // Secondary recipient — always receives a copy
  //const ccEmail = "swapnilpy2003@gmail.com";

  const transporter = getTransporter();

  await transporter.sendMail({
    from: `"AJ Legal Consultant" <${process.env.SMTP_USER}>`,
    to: primaryEmail,
    //cc: ccEmail,
    subject: `New Inquiry: ${data.service} \u2014 ${data.name}`,
    html: buildEmailHtml(data),
  });
}
