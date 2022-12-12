import { Tasks } from 'src/models/task/tasks.entity';
export declare class TasksDTO implements Readonly<TasksDTO> {
    id: string;
    note_id: string;
    name: string;
    sys_ownered: boolean;
    owner_id: string;
    start_at: Date;
    expire_at: Date;
    assigned_user: string;
    data: string;
    state: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<TasksDTO>): TasksDTO;
    static fromEntity(entity: Tasks): TasksDTO;
    static toEntity(dto: Partial<TasksDTO>): Tasks;
}
