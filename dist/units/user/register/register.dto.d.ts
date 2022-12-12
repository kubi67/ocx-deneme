import { User } from 'src/models/users/user.entity';
export declare class RegisterUsersDTO implements Readonly<RegisterUsersDTO> {
    id: string;
    email: string;
    username: string;
    password: string;
    parent_id: string;
    status: number;
    two_factor_secret: string;
    two_factor_recover_code: string;
    two_factor_confirmed_at: Date;
    current_broker_id: string;
    setting: string;
    firstname: string;
    lastname: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    isApproved: boolean;
    isVerified: boolean;
    static from(dto: Partial<RegisterUsersDTO>): RegisterUsersDTO;
    static fromEntity(entity: User): RegisterUsersDTO;
    static toEntity(dto: Partial<RegisterUsersDTO>): User;
}
