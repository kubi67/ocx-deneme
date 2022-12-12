import { Reports } from 'src/models/reports/reports.entity';
import { Repository } from 'typeorm';
import { ReportsDTO } from './reports.dto';
export declare class ReportsService {
    private readonly repo;
    constructor(repo: Repository<Reports>);
    getAll(): Promise<ReportsDTO[]>;
    getAllByStatus(status: boolean): Promise<ReportsDTO[]>;
    getByIdMany(id: string): Promise<ReportsDTO[]>;
    getByOwner(id: string): Promise<ReportsDTO[]>;
    getByState(state: number): Promise<ReportsDTO[]>;
    getById(id: string): Promise<ReportsDTO>;
    create(dto: ReportsDTO): Promise<ReportsDTO>;
    update(id: string, dto: ReportsDTO): Promise<ReportsDTO>;
    getAllWithAll(): Promise<any>;
    changeStatus(id: string): Promise<ReportsDTO>;
    softDelete(id: string): Promise<ReportsDTO>;
    hardDelete(id: string): Promise<any>;
}
