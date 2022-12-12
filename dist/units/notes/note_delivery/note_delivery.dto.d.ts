import { NoteDelivery } from 'src/models/notes/note_delivery.entity';
export declare class NoteDeliveryDTO implements Readonly<NoteDeliveryDTO> {
    id: string;
    note_id: string;
    user_id: string;
    delivered: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<NoteDeliveryDTO>): NoteDeliveryDTO;
    static fromEntity(entity: NoteDelivery): NoteDeliveryDTO;
    static toEntity(dto: Partial<NoteDeliveryDTO>): NoteDelivery;
}
