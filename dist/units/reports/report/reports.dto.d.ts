import { Reports } from 'src/models/reports/reports.entity';
export declare class ReportsDTO implements Readonly<ReportsDTO> {
    id: string;
    name: string;
    owner_id: string;
    data: string;
    state: number;
    type: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<ReportsDTO>): ReportsDTO;
    static fromEntity(entity: Reports): ReportsDTO;
    static toEntity(dto: Partial<ReportsDTO>): Reports;
}
