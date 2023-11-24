import { Request, Response, NextFunction } from 'express';
import { asyncWrapper } from "../middlewares/asyncWrapper";
import nodemailer from 'nodemailer';
import { httpStatusText } from './httpStatusText';
import AppError from './appError';

const sendEmail = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, subject, message } = req.body;
    
    if(!name || !email || !subject || !message){
      const error = new AppError('All fields are required', 401, httpStatusText.ERROR);
      return next(error);
    }

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
      subject: `${name} - ${subject}`,
      text: `${message} - ${email}`,
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