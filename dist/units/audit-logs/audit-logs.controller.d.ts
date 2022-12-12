import { AuditLogsDTO } from './audit-logs.dto';
import { AuditLogService } from './audit-logs.service';
export declare class AuditLogsController {
    private readonly auditLogService;
    constructor(auditLogService: AuditLogService);
    getAll(): Promise<AuditLogsDTO[]>;
    getAllByStatus(status: boolean): Promise<AuditLogsDTO[]>;
    getByUser(id: string): Promise<AuditLogsDTO[]>;
    get(id: string): Promise<AuditLogsDTO>;
    create(dto: AuditLogsDTO): Promise<AuditLogsDTO>;
}
