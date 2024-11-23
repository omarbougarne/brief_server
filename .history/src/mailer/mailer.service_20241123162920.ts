import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer'
import {SendEmailDto} from '../mailer/dto/send-mail.dto'
@Injectable()
export class MailerService {

    constructor(private configService: ConfigService){}
    mailTransport(){
    const transporter = nodemailer.createTransport({
      host: this.configService.get<string>('MAIL_HOST'),
      port: this.configService.get<string>('MAIL_PORT'),
      secure: false, 
      auth: {
        user: this.configService.get<string>('MAIL_USER'),
        pass: this.configService.get<string>('MAIL_PASSWORD'),
      },
    });
    return transporter;
    }

    async sendEmail(dto: SendEmailDto){
        const {from, recipient, subject, html, placeholderReplacements} = dto;

        const transport = this.mailTransport();

        const options: Mail.Options = {
            from: from ?? {
                user: this.configService.get<string>(' APP_NAME'),
                pass: this.configService.get<string>('DEFAULT_MAIL_FROM'),
              },
              to: recipents,
              subject,
              html
        }

        try{
            const result = await transport.sendEmail(options)
        }catch (err){
            
        }
    }
 


}