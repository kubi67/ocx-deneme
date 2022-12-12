import { ReportUser } from 'src/models/reports/reports_user.entity';
export declare class ReportsUserDTO implements Readonly<ReportsUserDTO> {
    id: string;
    user_id: string;
    report_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<ReportsUserDTO>): ReportsUserDTO;
    static fromEntity(entity: ReportUser): ReportsUserDTO;
    static toEntity(dto: Partial<ReportsUserDTO>): ReportUser;
}
