import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

const sendEmail = async(req: Request, res: Response) => {
  const {name, email, subject, message} = req.body;
  try {
		const transporter = nodemailer.createTransport({
			host: process.env.HOST,
			service: process.env.SERVICE,
			port: Number(process.env.EMAIL_PORT),
			secure: Boolean(process.env.SECURE),
			auth: {
				user: process.env.USER,
				pass: process.env.PASS,
			},
		});

		await transporter.sendMail({
			from: email,
			to: process.env.EMAIL_USER,
			subject:  `${name} - ${subject}`,
			text: message,
		});
		console.log("Email sent successfully");
	} catch (error) {
		console.log("Email not sent!");
		console.log(error);
	}
};
export { sendEmail };