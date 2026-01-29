import { NextResponse } from 'next/server';

const RESEND_API_KEY = process.env.RESEND_API_KEY;

type FormType = 'partner' | 'mentor' | 'volunteer' | 'facilities' | 'newsletter' | 'contact';

interface EmailRequest {
  formType: FormType;
  name: string;
  email: string;
}

const getEmailContent = (formType: FormType, name: string) => {
  const firstName = name.split(' ')[0];

  const contents: Record<FormType, { subject: string; heading: string; message: string }> = {
    partner: {
      subject: 'Thank You for Your Partnership Interest - JECP',
      heading: 'Partnership Application Received',
      message: `Thank you for expressing interest in partnering with Jagriti Enterprise Centre - Purvanchal. We have received your application and our team will review it carefully. We will get back to you within 5-7 business days to discuss potential collaboration opportunities.`,
    },
    mentor: {
      subject: 'Thank You for Your Mentor Application - JECP',
      heading: 'Mentor Application Received',
      message: `Thank you for your willingness to mentor aspiring entrepreneurs at JECP. Your expertise and guidance can make a significant difference in their journey. Our team will review your application and reach out to you within 5-7 business days.`,
    },
    volunteer: {
      subject: 'Thank You for Volunteering - JECP',
      heading: 'Volunteer Application Received',
      message: `Thank you for your interest in volunteering with Jagriti Enterprise Centre - Purvanchal. Your contribution will help us in our mission to foster entrepreneurship in Purvanchal. We will review your application and contact you shortly.`,
    },
    facilities: {
      subject: 'Facility Inquiry Received - JECP',
      heading: 'Facility Booking Request Received',
      message: `Thank you for your interest in using JECP facilities. We have received your inquiry and our team will review the availability based on your requirements. We will get back to you within 3-5 business days with more details.`,
    },
    newsletter: {
      subject: 'Welcome to JECP Newsletter',
      heading: 'Subscription Confirmed',
      message: `Thank you for subscribing to the JECP newsletter. You will now receive updates about our programs, events, success stories, and opportunities to engage with the entrepreneurial ecosystem of Purvanchal.`,
    },
    contact: {
      subject: 'We Received Your Message - JECP',
      heading: 'Message Received',
      message: `Thank you for reaching out to Jagriti Enterprise Centre - Purvanchal. We have received your message and our team will respond to your inquiry within 2-3 business days.`,
    },
  };

  const content = contents[formType];

  return {
    subject: content.subject,
    html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.1);">
          <tr>
            <td style="background-color:#1e3a5f;padding:30px;text-align:center;">
              <img src="https://jecp.in/images/logos/jecp-logo-white.png" alt="JECP Logo" style="height:50px;width:auto;">
            </td>
          </tr>
          <tr>
            <td style="padding:40px 30px;">
              <h1 style="color:#1e3a5f;font-size:24px;margin:0 0 20px 0;">${content.heading}</h1>
              <p style="color:#4a5568;font-size:16px;line-height:1.6;margin:0 0 20px 0;">Dear ${firstName},</p>
              <p style="color:#4a5568;font-size:16px;line-height:1.6;margin:0 0 30px 0;">${content.message}</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="https://jecp.in" style="display:inline-block;background-color:#e8954f;color:#ffffff;font-size:14px;font-weight:bold;text-decoration:none;padding:12px 30px;border-radius:8px;">Visit Our Website</a>
                  </td>
                </tr>
              </table>
              <p style="color:#718096;font-size:14px;line-height:1.6;margin:30px 0 0 0;">Best regards,<br><strong>Team JECP</strong></p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#f7fafc;padding:20px 30px;text-align:center;border-top:1px solid #e2e8f0;">
              <p style="color:#718096;font-size:12px;margin:0 0 10px 0;">
                <a href="https://jecp.in" style="color:#e8954f;text-decoration:none;">Website</a> |
                <a href="mailto:info@jagriti.org" style="color:#e8954f;text-decoration:none;">Contact Us</a>
              </p>
              <p style="color:#a0aec0;font-size:11px;margin:0;">© 2025 Jagriti Enterprise Centre - Purvanchal | All rights reserved</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
  };
};

export async function POST(request: Request) {
  try {
    const body: EmailRequest = await request.json();
    const { formType, name, email } = body;

    if (!formType || !name || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { subject, html } = getEmailContent(formType, name);

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'JECP <noreply@jagriti.org>',
        to: [email],
        subject,
        html,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Resend API error:', errorData);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json({ success: true, id: data.id });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
