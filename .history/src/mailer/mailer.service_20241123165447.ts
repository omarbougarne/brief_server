import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer'
import {SendEmailDto} from '../mailer/dto/send-mail.dto'
import { MailOptions } from 'nodemailer/lib/smtp-transport';
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
        const { from, recipient, subject, html } = dto;

        const transport = this.mailTransport();

        const options: MailOptions = {
            from: from ?? {
                user: this.configService.get<string>(' APP_NAME'),
                pass: this.configService.get<string>('DEFAULT_MAIL_FROM'),
              },
              to: recipient,
              subject,
              html
        }

        try{
            const result = await transport.sendMail(options);
            return result;
        }catch (err){
            console.log('Error', err)
            throw err
        }
    }
 


}