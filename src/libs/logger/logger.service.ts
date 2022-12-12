import { Request, Response, NextFunction } from 'express';
import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { AuditLogService } from 'src/units/audit-logs/audit-logs.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly auditLogService: AuditLogService) {}
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, originalUrl } = request;
    const userAgent = request.get('user-agent') || '';
    const contentLength = response.get('content-length');
    const methods = response.get('method');
    const { statusCode } = response;
    response.on('finish', async () => {
      this.logger.verbose(
        `${method} ${originalUrl} ${statusCode} - ${userAgent} ${ip}`,
      );
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
      this.logger.verbose(
        `${method} ${originalUrl} - ${userAgent} ${ip} üzerinden gelen istek tamamlandı!`,
      );

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
}
