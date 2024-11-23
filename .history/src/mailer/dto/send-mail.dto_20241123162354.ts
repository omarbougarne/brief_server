import {Address} from 'nodemailer/lib/mailer'


export class SendEmailDto  {

    from?: Address;
    recipient: Address[];
    subject: string;
    html: string;
    text?: string;
    placeholderReplacements?: Record<string, string>;


};