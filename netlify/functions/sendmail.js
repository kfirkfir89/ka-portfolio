import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

const handler: Handler = async (event, context) => {
  if (event.httpMethod !== 'POST' || !event.body) {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { statusCode: 200, body: 'Message sent' };
  } catch (error) {
    return { statusCode: 500, body: 'Error sending message' };
  }
};

export { handler };