import asyncWrapper from "../middlewares/asyncWrapper";
const nodemailer = require('nodemailer');
const httpStatusText = require('../utils/httpStatusText');

module.exports(
    asyncWrapper(
        async(req, res) => {
            const { name, email, message } = req.body;
            const transporter = nodemailer.createTransporter({
                service: 'gmail',
                auth: {
                    user: process.env.user,
                    pass: process.env.pass
                }
            });

            const mailOptions = ({
                from: email,
                to: process.env.user,
                subject: `Message from ${name}`,
                text: message,
            });

            transporter.sendMail(mailOptions, (error, info) => {
                if(error){
                    console.log(error);
                    res.status(500).json({status: httpStatusText.FAIL, message: 'Email not sent' });
                }else{
                    console.log(`Email sent: ` + info.response);
                    res.status(200).json({status: httpStatusText.SUCCESS, message: 'Email sent successfully'});
                }
            })
        }
    )
)