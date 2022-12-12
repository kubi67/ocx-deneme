import { CcCalls } from 'src/models/ccs/cc_calls.entity';
export declare class CcCallsDTO implements Readonly<CcCallsDTO> {
    id: string;
    cid: string;
    caller_number: string;
    duid: string;
    called_number: string;
    duration: number;
    call_start: Date;
    call_end: Date;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<CcCallsDTO>): CcCallsDTO;
    static fromEntity(entity: CcCalls): CcCallsDTO;
    static toEntity(dto: Partial<CcCallsDTO>): CcCalls;
}
