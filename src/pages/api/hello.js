// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Resend } from 'resend';
import { render } from '@react-email/components';
import Email from '../../../emails/job';
import { minify } from 'html-minifier';
import nodemailer from "nodemailer"
export default async function handler(req, res) {
  const apiKey = process.env.RESEND_API_KEY;
  const email = process.env.NODEMAILER_EMAIL;
  const password = process.env.NODEMAILER_PASSWORD;
  console.log(apiKey)
  const resend = new Resend(apiKey)
    try {
        // const data = await resend.emails.send({
        //   from: 'onboarding@resend.dev',
        //   to: ['thevinitgupta@gmail.com'],
        //   subject: 'Software Engineer Application',
        //   react: Email(),
        // });

        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          auth: {
              user: email,
              pass: password
          }
      });
      const htmlString = render(<Email />, {
        pretty: true,
      });
      // const reminifiedHtmlString = minify(htmlString, { maxLineLength: 255, keepClosingSlash: true });
      // console.log(reminifiedHtmlString);
      console.log(htmlString)
      const info = await transporter.sendMail({
        from: '"Vinit Gupta" <thevinitgupta@gmail.com>', // sender address
        to: "vinig2411@gmail.com", // list of receivers
        subject: "Software Engineer Application", // Subject line
        html : htmlString // html body
      });
      // const data = await info.json();
      console.log(info);
       res.status(200).send(reminifiedHtmlString)
      } catch (error) {
         res.status(500).json({ error });
      }
}
