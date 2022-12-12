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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const roles_decorator_1 = require("./decorators/roles.decorator");
const user_decorator_1 = require("./decorators/user.decorator");
const roles_enum_1 = require("./models/ownered/roles.enum");
const mailer_service_1 = require("./scripts/mailer-scripts/mailer.service");
const user_service_1 = require("./units/user/user/user.service");
let AppController = class AppController {
    constructor(appService, mailService, userService) {
        this.appService = appService;
        this.mailService = mailService;
        this.userService = userService;
    }
    async root(id) {
        try {
            const userData = await this.userService.getById(id);
            userData.isVerified = true;
            userData.isApproved = false;
            const updateUserData = await this.userService.update(userData.id, userData);
            console.log(updateUserData);
            return {
                message: `Sn. ${updateUserData.firstname} ${updateUserData.lastname}`,
            };
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async sendMail() {
        this.mailService.sendMail('dogukanc760@hotmail.com', 'Kullanıcı Doğrulama', '', 'Doğukan Canerler', 'overcodex.com', 'Bilgilendirme - Hata', 'İşleyiş İçerisinde Ufak bir Hata Oluştu...', '123');
        return 'Hello World!';
    }
    async testGuard(user) {
        return 'Hello World!';
    }
};
__decorate([
    (0, common_1.Get)('/send-mail/:id'),
    (0, common_1.Render)('index'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "root", null);
__decorate([
    (0, common_1.Get)('/scripts/sendMail'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "sendMail", null);
__decorate([
    (0, common_1.Get)('/test/guard'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.GetUser),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "testGuard", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        mailer_service_1.SendMailService,
        user_service_1.UsersService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map