import { ReportUser } from 'src/models/reports/reports_user.entity';
import { Repository } from 'typeorm';
import { ReportsUserDTO } from './reports-user.dto';
export declare class ReportsUserService {
    private readonly repo;
    constructor(repo: Repository<ReportUser>);
    getAll(): Promise<ReportsUserDTO[]>;
    getAllByStatus(status: boolean): Promise<ReportsUserDTO[]>;
    getByIdMany(id: string): Promise<ReportsUserDTO[]>;
    getByUser(id: string): Promise<ReportsUserDTO[]>;
    getByReport(id: string): Promise<ReportsUserDTO[]>;
    getById(id: string): Promise<ReportsUserDTO>;
    create(dto: ReportsUserDTO): Promise<ReportsUserDTO>;
    update(id: string, dto: ReportsUserDTO): Promise<ReportsUserDTO>;
    getAllWithAll(): Promise<any>;
    changeStatus(id: string): Promise<ReportsUserDTO>;
    softDelete(id: string): Promise<ReportsUserDTO>;
    hardDelete(id: string): Promise<any>;
}
