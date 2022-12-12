import { UsersLogin } from 'src/models/users/user_login.entity';
export declare class UserLoginDTO implements Readonly<UserLoginDTO> {
    id: string;
    user_id: string;
    ip_addr: string;
    last_access_at: Date;
    agent: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<UserLoginDTO>): UserLoginDTO;
    static fromEntity(entity: UsersLogin): UserLoginDTO;
    static toEntity(dto: Partial<UserLoginDTO>): UsersLogin;
}
