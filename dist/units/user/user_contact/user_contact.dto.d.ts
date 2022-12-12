import { UserContact } from 'src/models/users/user_contact.entity';
export declare class UserContactDTO implements Readonly<UserContactDTO> {
    id: string;
    user_id: string;
    contact_type: number;
    contact_data: number;
    status: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<UserContactDTO>): UserContactDTO;
    static fromEntity(entity: UserContact): UserContactDTO;
    static toEntity(dto: Partial<UserContactDTO>): UserContact;
}
