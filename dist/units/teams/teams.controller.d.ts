import { TeamsDTO } from './teams.dto';
import { TeamsService } from './teams.service';
export declare class TeamsController {
    private readonly teamService;
    constructor(teamService: TeamsService);
    getAll(): Promise<TeamsDTO[]>;
    getAllByStatus(status: boolean): Promise<TeamsDTO[]>;
    getByName(name: string): Promise<TeamsDTO[]>;
    getByBroker(id: string): Promise<TeamsDTO[]>;
    get(id: string): Promise<TeamsDTO>;
    create(dto: TeamsDTO): Promise<TeamsDTO>;
    update(id: string, dto: TeamsDTO): Promise<TeamsDTO>;
    softDelete(id: string): Promise<TeamsDTO>;
    hardDelete(id: string): Promise<any>;
}
