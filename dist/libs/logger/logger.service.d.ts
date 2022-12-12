import { Request, Response, NextFunction } from 'express';
import { NestMiddleware } from '@nestjs/common';
import { AuditLogService } from 'src/units/audit-logs/audit-logs.service';
export declare class LoggerMiddleware implements NestMiddleware {
    private readonly auditLogService;
    constructor(auditLogService: AuditLogService);
    private logger;
    use(request: Request, response: Response, next: NextFunction): void;
}
