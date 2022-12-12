import { UserPerformance } from 'src/models/users/user_performance.entity';
export declare class UserPerformanceDTO implements Readonly<UserPerformanceDTO> {
    id: string;
    user_id: string;
    lead_capacity: number;
    total_lead: number;
    assigned_by: string;
    last_assigned_at: Date;
    point: number;
    isDeleted: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    static from(dto: Partial<UserPerformanceDTO>): UserPerformanceDTO;
    static fromEntity(entity: UserPerformance): UserPerformanceDTO;
    static toEntity(dto: Partial<UserPerformanceDTO>): UserPerformance;
}
