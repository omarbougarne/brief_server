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


    async sendEmail(dto: SendEmailDto)
 return transporter;

}
}