import { ReportsUserDTO } from './reports-user.dto';
import { ReportsUserService } from './reports-user.service';
export declare class ReportsUserController {
    private readonly reportUserService;
    constructor(reportUserService: ReportsUserService);
    getAll(): Promise<ReportsUserDTO[]>;
    getAllByStatus(status: boolean): Promise<ReportsUserDTO[]>;
    get(id: string): Promise<ReportsUserDTO>;
    getLeadsFull(): Promise<any>;
    getByOwner(id: string): Promise<ReportsUserDTO[]>;
    getByReport(id: string): Promise<ReportsUserDTO[]>;
    create(dto: ReportsUserDTO): Promise<ReportsUserDTO>;
    update(id: string, dto: ReportsUserDTO): Promise<ReportsUserDTO>;
    softDelete(id: string): Promise<ReportsUserDTO>;
    hardDelete(id: string): Promise<any>;
}
