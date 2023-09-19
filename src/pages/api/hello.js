// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import Email from '../../../emails/job';

export default async function handler(req, res) {
  const apiKey = process.env.RESEND_API_KEY;
  console.log(apiKey)
  const resend = new Resend(apiKey)
    try {
        const data = await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: ['thevinitgupta@gmail.com'],
          subject: 'Software Engineer Application',
          react: Email(),
        });
    
        return res.status(200).json(data);
      } catch (error) {
        return NextResponse.json({ error });
      }
}
