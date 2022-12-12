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
exports.LoggerMiddleware = void 0;
const common_1 = require("@nestjs/common");
const audit_logs_service_1 = require("../../units/audit-logs/audit-logs.service");
let LoggerMiddleware = class LoggerMiddleware {
    constructor(auditLogService) {
        this.auditLogService = auditLogService;
        this.logger = new common_1.Logger('HTTP');
    }
    use(request, response, next) {
        const { ip, method, originalUrl } = request;
        const userAgent = request.get('user-agent') || '';
        const contentLength = response.get('content-length');
        const methods = response.get('method');
        const { statusCode } = response;
        response.on('finish', async () => {
            this.logger.verbose(`${method} ${originalUrl} ${statusCode} - ${userAgent} ${ip}`);
            await this.auditLogService.create({
                event_type: 1,
                event: method,
                event_data: `${method} ${originalUrl} - ${userAgent} ${ip} üzerinden gelen istek tasmamlandı!`,
                id: '',
                url: originalUrl,
                ip_addr: ip,
                user_agent: userAgent,
                tags: 5,
                user_id: 'e1111442-f87c-4448-89c7-9c13aae4ddfb',
                created_at: new Date(),
                updated_at: new Date(),
                deleted_at: new Date(),
                lastChangedDateTime: new Date(),
                isDeleted: false,
            });
        });
        response.on('error', async (err) => {
            this.logger.error('Bir hata oluştu=>', err);
            await this.auditLogService.create({
                event_type: 1,
                event: method,
                event_data: `${method} ${originalUrl} - ${userAgent} ${ip} üzerinden gelen istek hata verdi! Hata => ${err}`,
                id: '',
                url: originalUrl,
                ip_addr: ip,
                user_agent: userAgent,
                tags: 5,
                user_id: 'e1111442-f87c-4448-89c7-9c13aae4ddfb',
                created_at: new Date(),
                updated_at: new Date(),
                deleted_at: new Date(),
                lastChangedDateTime: new Date(),
                isDeleted: false,
            });
        });
        response.on('close', async () => {
            this.logger.verbose(`${method} ${originalUrl} - ${userAgent} ${ip} üzerinden gelen istek tamamlandı!`);
            await this.auditLogService.create({
                event_type: 1,
                event: method,
                event_data: `${method} ${originalUrl} - ${userAgent} ${ip} üzerinden gelen istek tamamlandı!`,
                id: '',
                url: originalUrl,
                ip_addr: ip,
                user_agent: userAgent,
                tags: 5,
                user_id: 'e1111442-f87c-4448-89c7-9c13aae4ddfb',
                created_at: new Date(),
                updated_at: new Date(),
                deleted_at: new Date(),
                lastChangedDateTime: new Date(),
                isDeleted: false,
            });
        });
        next();
    }
};
LoggerMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [audit_logs_service_1.AuditLogService])
], LoggerMiddleware);
exports.LoggerMiddleware = LoggerMiddleware;
//# sourceMappingURL=logger.service.js.map