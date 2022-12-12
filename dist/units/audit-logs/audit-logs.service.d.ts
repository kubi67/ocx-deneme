import { AuditLog } from 'src/models/logs/audit_log.entity';
import { Repository } from 'typeorm';
import { AuditLogsDTO } from './audit-logs.dto';
export declare class AuditLogService {
    private readonly repo;
    constructor(repo: Repository<AuditLog>);
    getAll(): Promise<AuditLogsDTO[]>;
    getAllByStatus(status: boolean): Promise<AuditLogsDTO[]>;
    getByIdMany(id: string): Promise<AuditLogsDTO[]>;
    getByUser(id: string): Promise<AuditLogsDTO[]>;
    getById(id: string): Promise<AuditLogsDTO>;
    create(dto: AuditLogsDTO): Promise<AuditLogsDTO>;
    update(id: string, dto: AuditLogsDTO): Promise<AuditLogsDTO>;
    changeStatus(id: string): Promise<AuditLogsDTO>;
    softDelete(id: string): Promise<AuditLogsDTO>;
    hardDelete(id: string): Promise<any>;
}
