import { UserPerformanceDTO } from './user_performance.dto';
import { UserPerformanceService } from './user_performance.service';
export declare class UserPerformanceController {
    private readonly userPerformanceService;
    constructor(userPerformanceService: UserPerformanceService);
    getAll(): Promise<UserPerformanceDTO[]>;
    getAllByStatus(status: boolean): Promise<UserPerformanceDTO[]>;
    getAllByAssigned(assigned: string): Promise<UserPerformanceDTO[]>;
    getAllByUser(userID: string): Promise<UserPerformanceDTO[]>;
    get(id: string): Promise<UserPerformanceDTO>;
    create(dto: UserPerformanceDTO): Promise<UserPerformanceDTO>;
    update(id: string, dto: UserPerformanceDTO): Promise<UserPerformanceDTO>;
    softDelete(id: string): Promise<UserPerformanceDTO>;
    hardDelete(id: string): Promise<any>;
}
