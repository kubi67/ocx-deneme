import { UserPerformance } from 'src/models/users/user_performance.entity';
import { Repository } from 'typeorm';
import { UserPerformanceDTO } from './user_performance.dto';
export declare class UserPerformanceService {
    private readonly repo;
    constructor(repo: Repository<UserPerformance>);
    getAll(): Promise<UserPerformanceDTO[]>;
    getAllByStatus(status: boolean): Promise<UserPerformanceDTO[]>;
    getByIdMany(id: string): Promise<UserPerformanceDTO[]>;
    getById(id: string): Promise<UserPerformanceDTO>;
    getByAssignedBy(assignedBy: string): Promise<UserPerformanceDTO[]>;
    getByUser(userID: string): Promise<UserPerformanceDTO[]>;
    create(dto: UserPerformanceDTO): Promise<UserPerformanceDTO>;
    update(id: string, dto: UserPerformanceDTO): Promise<UserPerformanceDTO>;
    changeStatus(id: string): Promise<UserPerformanceDTO>;
    softDelete(id: string): Promise<UserPerformanceDTO>;
    hardDelete(id: string): Promise<any>;
}
