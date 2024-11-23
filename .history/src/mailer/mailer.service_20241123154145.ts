import { Injectable } from '@nestjs/common';

@Injectable()
export class MailerService {

    const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, 
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },
    });
    
    
    async function main() {
      
      const info = await transporter.sendMail({
        from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', 
        to: "bar@example.com, baz@example.com", 
        subject: "Hello ✔", 
        text: "Hello world?", 
        html: "<b>Hello world?</b>", 
      });
    
      console.log("Message sent: %s", info.messageId);
      
    }
    
    main().catch(console.error);

}
