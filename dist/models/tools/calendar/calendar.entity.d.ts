import { BaseEntity } from 'src/models/base.entity';
export declare class Tasks extends BaseEntity {
    note_id: string;
    name: string;
    sys_ownered: boolean;
    owner_id: string;
    start_at: Date;
    expire_at: Date;
    assigned_user: string;
    data: string;
    state: number;
}
