<<<<<<< HEAD
import { Controller, Post } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { SendEmailDto } from './dto/send-mail.dto';
=======


@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}



  @Post('/send-mail')
  async sendMailer(){
    const dto: SendEmailDto = {
      from: {name: 'Lucy', address: 'lucy@example.com'},
      recipients: [{name: 'John Doe', address: 'john@Example.com'}],
      subject: 'Lucky',
      html: '<h1>hiiiiiii</h1>',
    };
    return await this.mailerService.sendEmail(dto);
}
