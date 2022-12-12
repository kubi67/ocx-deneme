import { BaseEntity } from '../base.entity';
export declare class CcCalls extends BaseEntity {
    cid: string;
    caller_number: string;
    duid: string;
    called_number: string;
    duration: number;
    call_start: Date;
    call_end: Date;
}
