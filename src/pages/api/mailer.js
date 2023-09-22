// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Resend } from 'resend';
import { render } from '@react-email/components';
import Email from '../../../emails/job';
import { minify } from 'html-minifier';
import nodemailer from "nodemailer"
export default async function handler(req, res) {
    const {name, email, location} = JSON.parse(req.body);
    if(!name || !email || !location) {
        res.status(403).json({
            message : "Data Missing"
        })
    }
  const apiKey = process.env.RESEND_API_KEY;
  console.log(apiKey)
  console.log(email, name, location)
    try {
        // const data = await resend.emails.send({
        //   from: 'onboarding@resend.dev',
        //   to: ['thevinitgupta@gmail.com'],
        //   subject: 'Software Engineer Application',
        //   react: Email(),
        // });

        const transporter = nodemailer.createTransport({
          host: 'smtp.resend.com',
          secure: true,
          port: 465,
          auth: {
            user: 'resend',
            pass: apiKey,
          },
        });
      const htmlString = render(Email({
        name
      }), {
        pretty: true,
      });
      // const reminifiedHtmlString = minify(htmlString, { maxLineLength: 255, keepClosingSlash: true });
      // console.log(reminifiedHtmlString);
      console.log(htmlString)
      const info = await transporter.sendMail({
        from: '"Vinit Gupta" <vinit@thevinitgupta.tech>', // sender address
        to: email, // list of receivers
        subject: `Software Engineer Opportunities in ${location}`, // Subject line
        html : htmlString // html body
      });
      // const data = await info.json();
      console.log(info);
       res.status(200).send(htmlString)
      } catch (error) {
        console.log(error)
         res.status(200).json({ message : error.message });
      }
}
