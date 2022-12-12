import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class SendMailService {
  constructor(private readonly mailerService: MailerService) {}
  public example(mailTo: string, mailFrom: string,text: string, subject: string, html: string) {
    this.mailerService
      .sendMail({
        to: mailTo, // list of receivers
        from: mailFrom, // sender address
        subject: 'OverCodex Doğrulama ✔ ' + subject, // Subject line
        text: text, // plaintext body
        html: '<b>welcome</b>', // HTML body content
      })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async sendMail(
    mailTo: string,
    subject: string,
    template: string,
    name: string,
    url: string,
    title: string,
    bottomText: string,
    userID: string
  ) {
    try {
      await this.mailerService.sendMail({
        from:"dodoyeni@outlook.com",
        to: mailTo,
        subject: name ,
        template: 'mailtemps',
        context: {
          subject: subject,
          title: title,
          bottomText: bottomText,
          name: name,
          url: url,
          userID: userID,
        },
      });
    } catch (e) {
      console.log('hata');
      console.log(e);
    }
  }
}
