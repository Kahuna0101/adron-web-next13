import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message, consent } = await req.json();

    const user = process.env.EMAIL_USER;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: user,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOption = {
      from: `AdronHomes 🏡 <${user}>`,
      to: user,
      replyTo: email,
      subject: `Contact Form Submission By ${name}`,
      html: `
            <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
                <div style="max-width: 700px; background-color: white; margin: 0 auto">
                    <div style="width: 100%; background-color: green; padding: 20px 0">
                      <img src="https://res.cloudinary.com/daamcwt3y/image/upload/v1693341349/logo_n24gyg.jpg" alt="AdronHomes" style="width: 100%; height: 70px; object-fit: contain" />
                    </div>

                    <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
                        <p style="font-weight: 800; font-size: 1.2rem; padding: 0 30px">
                            From Adron Homes
                        </p>
                        <div style="font-size: .8rem; margin: 0 30px">
                            <p>FullName: ${name}<p/>
                            <p>Email: ${email}<p/>
                            <p>Phone Number: ${phone}<p/>
                            <p>Message: ${message}<p/>
                            <p>Consent: ${consent}<p/>
                        </div>
                    </div>
                </div>
            </div>
            `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
