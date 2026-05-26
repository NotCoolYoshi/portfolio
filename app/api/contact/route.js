import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, enquiry, message } = body;

    // ── Option A: Resend (recommended) ──────────────────────────────────
    // 1. npm install resend
    // 2. Sign up at resend.com and get a free API key
    // 3. Add RESEND_API_KEY=re_xxxx to your .env.local and Vercel env vars
    // 4. Uncomment the block below:
    //
    // if (!process.env.RESEND_API_KEY) throw new Error("Missing RESEND_API_KEY");
    // const { Resend } = await import("resend");
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Portfolio <noreply@yourdomain.com>",   // must be a verified domain in Resend
    //   to: "sean.zhdai@gmail.com",
    //   subject: `New enquiry: ${enquiry || "General"} — ${firstName} ${lastName}`,
    //   text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nEnquiry: ${enquiry}\n\nMessage:\n${message}`,
    // });
    // ────────────────────────────────────────────────────────────────────

    // For now, log to console (remove in production once email is wired up)
    console.log("Contact form submission:", { firstName, lastName, email, enquiry, message });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
