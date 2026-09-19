import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
      service : "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
});


async function sendEmail({to, subject, message}) {
const mailOptions = {
        from: `"My Application" <${process.env.EMAIL_USER}>`,
        to,
        subject,

        text: message,

        html: `
            <div style="
                font-family: Arial, sans-serif;
                max-width: 600px;
                margin: auto;
                padding: 30px;
                border: 1px solid #e5e7eb;
                border-radius: 10px;
            ">

                <h2 style="margin-bottom: 20px;">
                    My Application
                </h2>

                <p style="font-size: 16px;">
                    Hello,
                </p>

                <p style="font-size: 16px; line-height: 1.6;">
                    ${message}
                </p>

                <p style="margin-top: 30px;">
                    Regards,<br>
                    <strong>My Team xyz@company</strong>
                </p>

            </div>
        `
    };


    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(`Email sent: ${info.response}`);
    } catch (error) {
        console.error(`Error sending email: ${error}`); 
        throw error;

    }
}


export default sendEmail;