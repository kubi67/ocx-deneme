import { BaseEntity } from '../base.entity';
export declare class User extends BaseEntity {
    parent_id: string;
    username: string;
    password: string;
    status: number;
    email: string;
    two_factor_secret: string;
    two_factor_recover_code: string;
    two_factor_confirmed_at: Date;
    two_factor_verified: boolean;
    current_broker_id: string;
    setting: string;
    isLeadOperator: boolean;
    isTrader: boolean;
    isLast: boolean;
    firstname: string;
    lastname: string;
    access_token: string;
    refresh_token: string;
    token_expire_at: Date;
    isToken_expired: boolean;
    isVerified: boolean;
    verified_at: Date;
    isApproved: boolean;
    approved_by: string;
    approved_at: Date;
}