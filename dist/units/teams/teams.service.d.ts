import { Team } from 'src/models/teams/teams.entity';
import { Repository } from 'typeorm';
import { TeamsDTO } from './teams.dto';
export declare class TeamsService {
    private readonly repo;
    constructor(repo: Repository<Team>);
    getAll(): Promise<TeamsDTO[]>;
    getByIdMany(id: string): Promise<TeamsDTO[]>;
    getByBrokerID(id: string): Promise<TeamsDTO[]>;
    getByName(name: string): Promise<TeamsDTO[]>;
    getAllByStatus(status: boolean): Promise<TeamsDTO[]>;
    getById(id: string): Promise<TeamsDTO>;
    create(dto: TeamsDTO): Promise<TeamsDTO>;
    update(id: string, dto: TeamsDTO): Promise<TeamsDTO>;
    changeStatus(id: string): Promise<TeamsDTO>;
    softDelete(id: string): Promise<TeamsDTO>;
    hardDelete(id: string): Promise<any>;
}
