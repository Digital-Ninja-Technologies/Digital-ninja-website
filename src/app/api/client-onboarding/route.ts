import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { sections, submittedAt } = body;

    // Build the HTML email body from all sections/answers
    let emailHtml = `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 700px; margin: 0 auto; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #FF6602 0%, #FD3600 100%); padding: 40px 32px; border-radius: 12px 12px 0 0;">
          <h1 style="color: #ffffff; margin: 0 0 8px; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
            📋 New Client Onboarding Submission
          </h1>
          <p style="color: rgba(255,255,255,0.85); margin: 0; font-size: 15px;">
            Submitted on ${new Date(submittedAt).toLocaleString("en-GB", {
              dateStyle: "full",
              timeStyle: "short",
            })}
          </p>
        </div>
        <div style="padding: 32px; background: #f8f8f8; border-radius: 0 0 12px 12px;">
    `;

    // Loop through each section
    for (const section of sections) {
      const hasAnswers = section.questions.some(
        (q: { question: string; answer: string | string[] }) =>
          Array.isArray(q.answer) ? q.answer.length > 0 : q.answer?.trim()
      );
      if (!hasAnswers) continue;

      emailHtml += `
        <div style="margin-bottom: 32px; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.06);">
          <div style="background: #FF6602; padding: 14px 20px;">
            <h2 style="color: #ffffff; margin: 0; font-size: 15px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px;">
              ${section.title}
            </h2>
          </div>
          <div style="padding: 0;">
      `;

      for (const q of section.questions) {
        const answer = Array.isArray(q.answer)
          ? q.answer.join(", ")
          : q.answer?.trim();
        if (!answer) continue;

        emailHtml += `
          <div style="padding: 14px 20px; border-bottom: 1px solid #f0f0f0;">
            <p style="margin: 0 0 4px; font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">
              ${q.question}
            </p>
            <p style="margin: 0; font-size: 15px; color: #1a1a1a; line-height: 1.6;">
              ${answer.replace(/\n/g, "<br>")}
            </p>
          </div>
        `;
      }

      emailHtml += `</div></div>`;
    }

    emailHtml += `
          <div style="text-align: center; padding: 20px 0 0; border-top: 2px solid #FF6602; margin-top: 8px;">
            <p style="color: #999; font-size: 13px; margin: 0;">
              Sent via <strong style="color: #FF6602;">Digital Ninja Technologies</strong> Client Onboarding ·
              <a href="https://www.thedigitalninjatech.com" style="color: #FF6602; text-decoration: none;">thedigitalninjatech.com</a>
            </p>
          </div>
        </div>
      </div>
    `;

    // Extract client name + email for the subject line
    const clientInfoSection = sections.find((s: { title: string }) =>
      s.title.toLowerCase().includes("client")
    );
    let clientName = "A potential client";
    let clientEmail = "";
    if (clientInfoSection) {
      const nameQ = clientInfoSection.questions.find((q: { question: string }) =>
        q.question.toLowerCase().includes("full name")
      );
      const emailQ = clientInfoSection.questions.find((q: { question: string }) =>
        q.question.toLowerCase().includes("email")
      );
      if (nameQ?.answer) clientName = nameQ.answer;
      if (emailQ?.answer) clientEmail = emailQ.answer;
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"DNT Client Onboarding" <${process.env.SMTP_USER}>`,
      to: "thedigitalninjatechnologies@gmail.com",
      replyTo: clientEmail || undefined,
      subject: `🚀 New Onboarding: ${clientName} — Product Discovery Questionnaire`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Client onboarding email error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
