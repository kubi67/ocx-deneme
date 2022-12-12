import { MailerService } from '@nestjs-modules/mailer';
export declare class SendMailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    example(mailTo: string, mailFrom: string, text: string, subject: string, html: string): void;
    sendMail(mailTo: string, subject: string, template: string, name: string, url: string, title: string, bottomText: string, userID: string): Promise<void>;
}
