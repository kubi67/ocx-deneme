"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMailService = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
let SendMailService = class SendMailService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    example(mailTo, mailFrom, text, subject, html) {
        this.mailerService
            .sendMail({
            to: mailTo,
            from: mailFrom,
            subject: 'OverCodex Doğrulama ✔ ' + subject,
            text: text,
            html: '<b>welcome</b>',
        })
            .then((resp) => {
            console.log(resp);
        })
            .catch((err) => {
            console.log(err);
        });
    }
    async sendMail(mailTo, subject, template, name, url, title, bottomText, userID) {
        try {
            await this.mailerService.sendMail({
                from: "dodoyeni@outlook.com",
                to: mailTo,
                subject: name,
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
        }
        catch (e) {
            console.log('hata');
            console.log(e);
        }
    }
};
SendMailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], SendMailService);
exports.SendMailService = SendMailService;
//# sourceMappingURL=mailer.service.js.map