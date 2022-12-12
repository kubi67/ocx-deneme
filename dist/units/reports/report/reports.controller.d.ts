import { ReportsDTO } from './reports.dto';
import { ReportsService } from './reports.service';
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    getAll(): Promise<ReportsDTO[]>;
    getAllByStatus(status: boolean): Promise<ReportsDTO[]>;
    get(id: string): Promise<ReportsDTO>;
    getLeadsFull(): Promise<any>;
    getByOwner(id: string): Promise<ReportsDTO[]>;
    getByState(state: number): Promise<ReportsDTO[]>;
    create(dto: ReportsDTO): Promise<ReportsDTO>;
    update(id: string, dto: ReportsDTO): Promise<ReportsDTO>;
    softDelete(id: string): Promise<ReportsDTO>;
    hardDelete(id: string): Promise<any>;
}
