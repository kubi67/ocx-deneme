import { User } from 'src/models/users/user.entity';
export declare class UserCreateDTO implements Readonly<UserCreateDTO> {
    id: string;
    email: string;
    username: string;
    password: string;
    parent_id: string;
    status: number;
    two_factor_secret: string;
    two_factor_recover_code: string;
    two_factor_confirmed_at: Date;
    isLeadOperator: boolean;
    isTrader: boolean;
    isLast: boolean;
    current_broker_id: string;
    setting: string;
    firstname: string;
    lastname: string;
    role_id: string;
    access_token: string;
    refresh_token: string;
    token_expire_at: Date;
    isToken_expired: boolean;
    approved_by: string;
    approved_at: Date;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    isApproved: boolean;
    isVerified: boolean;
    static from(dto: Partial<UserCreateDTO>): UserCreateDTO;
    static fromEntity(entity: User): UserCreateDTO;
    static toEntity(dto: Partial<UserCreateDTO>): User;
}