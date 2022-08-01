// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
let nodemailer = require('nodemailer')

type Data = {
  status: string
}

let transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
     user: 'hanksberger@gmail.com',
     pass: 'dqiokmqxzneowlev'
   }
 });

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
   if(req.method === 'POST'){
       let mailOptions = {
         from: 'hanksberger@gmail.com',
         to: 'hanksberger@gmail.com',
         subject: `${req.body.name} | ${req.body.email}`,
         text: req.body.message
       };
       
       transporter.sendMail(mailOptions, function(error:any, info:any){
         if (error) {
           console.log(error);
         } else {
           console.log('Email sent: ' + info.response);
         }
       });

      console.log(req)
      res.status(200).json({status: 'Completed'});
   } else {
      res.status(403).json({status: 'Forbidden'});
   }
}