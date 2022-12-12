import { TeamUser } from 'src/models/users/team_user.entity';
import { Repository } from 'typeorm';
import { TeamUserDTO } from './team_user.dto';
export declare class TeamUserService {
    private readonly repo;
    constructor(repo: Repository<TeamUser>);
    getAll(): Promise<TeamUserDTO[]>;
    getAllByStatus(status: boolean): Promise<TeamUserDTO[]>;
    getByIdMany(id: string): Promise<TeamUserDTO[]>;
    getById(id: string): Promise<TeamUserDTO>;
    create(dto: TeamUserDTO): Promise<TeamUserDTO>;
    update(id: string, dto: TeamUserDTO): Promise<TeamUserDTO>;
    changeStatus(id: string): Promise<TeamUserDTO>;
    softDelete(id: string): Promise<TeamUserDTO>;
    hardDelete(id: string): Promise<any>;
}
