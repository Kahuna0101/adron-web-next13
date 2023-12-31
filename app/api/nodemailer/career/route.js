import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const {
      surname,
      name,
      email,
      phone,
      address,
      dob,
      marital,
      grade,
      institution,
      qualification,
      course,
      startDate,
      endDate,
      experienceYears,
      workExperience,
      workExperience2,
      workExperience3,
      qualification1,
      qualification2,
      jobRole,
      preferredLocation,
      availabile,
      relocate,
      currentSalary,
      expectedSalary,
      grossSalary,
      expectedGross,
      cv,
      consent
    } = await req.json();

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
      subject: `Subscription Form Submission By ${surname} ${name}`,
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
                        <p>surname: ${surname}</p>
                        <p>name: ${name}</p>
                        <p>email: ${email}</p>
                        <p>phone: ${phone}</p>
                        <p>address: ${address}</p>
                        <p>dob: ${dob}</p>
                        <p>marital: ${marital}</p>
                        <p>grade: ${grade}</p>
                        <p>institution: ${institution}</p>
                        <p>qualification: ${qualification}</p>
                        <p>course: ${course}</p>
                        <p>startDate: ${startDate}</p>
                        <p>endDate: ${endDate}</p>
                        <p>experienceYears: ${experienceYears}</p>
                        <p>workExperience: ${workExperience}</p>
                        <p>workExperience2: ${workExperience2}</p>
                        <p>workExperience3: ${workExperience3}</p>
                        <p>qualification1: ${qualification1}</p>
                        <p>qualification2: ${qualification2}</p>
                        <p>jobRole: ${jobRole}</p>
                        <p>preferredLocation: ${preferredLocation}</p>
                        <p>availabile: ${availabile}</p>
                        <p>relocation: ${relocate}</p>
                        <p>currentSalary: ${currentSalary}</p>
                        <p>expectedSalary: ${expectedSalary}</p>
                        <p>grossSalary: ${grossSalary}</p>
                        <p>expectedGross: ${expectedGross}</p>
                        <p>cv: ${cv}</p>
                        <p>consent: ${consent}</p>
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
