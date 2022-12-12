import { UserAddress } from 'src/models/users/user_adress.entity';
export declare class UserAdressDTO implements Readonly<UserAdressDTO> {
    id: string;
    user_id: string;
    address: string;
    country: number;
    state: number;
    city: number;
    zip_code: number;
    status: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<UserAdressDTO>): UserAdressDTO;
    static fromEntity(entity: UserAddress): UserAdressDTO;
    static toEntity(dto: Partial<UserAdressDTO>): UserAddress;
}
