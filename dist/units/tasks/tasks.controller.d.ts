import { TasksDTO } from './tasks.dto';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private readonly taskService;
    constructor(taskService: TasksService);
    getAll(): Promise<TasksDTO[]>;
    getAllByStatus(status: boolean): Promise<TasksDTO[]>;
    getByName(name: string): Promise<TasksDTO[]>;
    getByOwnerID(id: string): Promise<TasksDTO[]>;
    getByAssigned(id: string): Promise<TasksDTO[]>;
    getByOwnered(ownered: boolean): Promise<TasksDTO[]>;
    get(id: string): Promise<TasksDTO>;
    create(dto: TasksDTO): Promise<TasksDTO>;
    update(id: string, dto: TasksDTO): Promise<TasksDTO>;
    softDelete(id: string): Promise<TasksDTO>;
    hardDelete(id: string): Promise<any>;
}
