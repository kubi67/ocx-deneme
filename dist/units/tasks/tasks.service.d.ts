import { Tasks } from 'src/models/task/tasks.entity';
import { Repository } from 'typeorm';
import { TasksDTO } from './tasks.dto';
export declare class TasksService {
    private readonly repo;
    constructor(repo: Repository<Tasks>);
    getAll(): Promise<TasksDTO[]>;
    getByIdMany(id: string): Promise<TasksDTO[]>;
    getByOwnerID(id: string): Promise<TasksDTO[]>;
    getByName(name: string): Promise<TasksDTO[]>;
    getByAssigned(assigned: string): Promise<TasksDTO[]>;
    getByOwnered(ownered: boolean): Promise<TasksDTO[]>;
    getAllByStatus(status: boolean): Promise<TasksDTO[]>;
    getById(id: string): Promise<TasksDTO>;
    create(dto: TasksDTO): Promise<TasksDTO>;
    update(id: string, dto: TasksDTO): Promise<TasksDTO>;
    changeStatus(id: string): Promise<TasksDTO>;
    softDelete(id: string): Promise<TasksDTO>;
    hardDelete(id: string): Promise<any>;
}
