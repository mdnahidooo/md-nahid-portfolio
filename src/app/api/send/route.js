import { Resend } from "resend";

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        // 1. Validate incoming request fields
        if (!name || !email || !message) {
            return Response.json(
                { error: "Missing required fields (name, email, or message)." },
                { status: 400 }
            );
        }

        // 2. Validate environment variable
        if (!process.env.RESEND_API_KEY) {
            console.error("Missing RESEND_API_KEY in environment variables.");
            return Response.json(
                { error: "Server configuration error. API key missing." },
                { status: 500 }
            );
        }

        // 3. Send email via Resend
        // IMPORTANT: 'to' must match the email address you registered on Resend when using 'onboarding@resend.dev'
        const { data, error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: ["my85anonymous@gmail.com"],
            replyTo: email, // Directs your Gmail reply back to the visitor's email address
            subject: `Portfolio Message from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; color: #1e293b; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px; margin: 0 auto;">
          <h2 style="color: #2563eb; margin-top: 0;">New Portfolio Message</h2>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          
          <div style="margin-bottom: 12px;">
            <strong style="color: #64748b;">Sender Name:</strong>
            <p style="margin: 4px 0 0 0; font-size: 16px; font-weight: 600;">${name}</p>
          </div>

          <div style="margin-bottom: 16px;">
            <strong style="color: #64748b;">Sender Email:</strong>
            <p style="margin: 4px 0 0 0; font-size: 16px;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
          </div>

          <div style="margin-bottom: 8px;">
            <strong style="color: #64748b;">Message:</strong>
            <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; padding: 16px; border-radius: 8px; margin-top: 6px; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          </div>
        </div>
      `,
        });

        // 4. Handle Resend API response errors
        if (error) {
            console.error("Resend API Error:", error);
            return Response.json({ error: error.message }, { status: 400 });
        }

        // 5. Success response
        return Response.json({ success: true, data }, { status: 200 });
    } catch (err) {
        console.error("Internal Server Error:", err);
        return Response.json(
            { error: err.message || "An unexpected error occurred on the server." },
            { status: 500 }
        );
    }
}