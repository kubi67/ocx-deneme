import { User } from 'src/models/users/user.entity';
export declare class LoginUsersDTO implements Readonly<LoginUsersDTO> {
    id: string;
    email: string;
    username: string;
    password: string;
    static from(dto: Partial<LoginUsersDTO>): LoginUsersDTO;
    static fromEntity(entity: User): LoginUsersDTO;
    static toEntity(dto: Partial<LoginUsersDTO>): User;
}
