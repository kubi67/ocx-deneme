import { AuditLog } from 'src/models/logs/audit_log.entity';
export declare class AuditLogsDTO implements Readonly<AuditLogsDTO> {
    id: string;
    event_type: number;
    event: string;
    event_data: string;
    url: string;
    ip_addr: string;
    user_agent: string;
    tags: number;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<AuditLogsDTO>): AuditLogsDTO;
    static fromEntity(entity: AuditLog): AuditLogsDTO;
    static toEntity(dto: Partial<AuditLogsDTO>): AuditLog;
}
