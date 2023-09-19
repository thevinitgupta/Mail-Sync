import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import Email from '../../../../emails/job';
const resend = new Resend(process.env.RESEND_API_KEY)
export async function GET(){
    try {
        const data = await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: ['vinig2411@gmail.com'],
          subject: 'Software Engineer Application',
          react: Email(),
        });
    
        return NextResponse.json(data);
      } catch (error) {
        return NextResponse.json({ error });
      }
}