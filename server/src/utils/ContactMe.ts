import { Request, Response } from 'express';
import { asyncWrapper } from "../middlewares/asyncWrapper";
import nodemailer from 'nodemailer';
import { httpStatusText } from './httpStatusText';
import { google } from 'googleapis';

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  '272851122702-2np6licl46q8do8d138gfgu7t9fb6pln.apps.googleusercontent.com',
  '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',
  'https://developers.google.com/oauthplayground'
);

const sendEmail = asyncWrapper(
  async (req: Request, res: Response) => {
    const { name, email, subject, message } = req.body;
    console.log(req.body);
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `${subject} - ${name} | ${email}`,
      text: message,
    };

    transporter.sendMail(mailOptions, (error: any, info: any) => {
      if (error) {
        console.error(error);
        res.status(500).json({ status: httpStatusText.FAIL, message: 'Email not sent' });
      } else {
        console.log(`Email sent: ${info.response}`);
        res.status(200).json({ status: httpStatusText.SUCCESS, message: 'Email sent successfully' });
      }
    });
  }
);

export { sendEmail };