import { BaseEntity } from '../base.entity';
export declare class NoteDelivery extends BaseEntity {
    note_id: string;
    user_id: string;
    delivered: boolean;
}
