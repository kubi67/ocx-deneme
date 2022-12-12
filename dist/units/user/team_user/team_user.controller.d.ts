import { TeamUserDTO } from './team_user.dto';
import { TeamUserService } from './team_user.service';
export declare class TeamUserController {
    private readonly teamUserService;
    constructor(teamUserService: TeamUserService);
    getAll(): Promise<TeamUserDTO[]>;
    getAllByStatus(status: boolean): Promise<TeamUserDTO[]>;
    get(id: string): Promise<TeamUserDTO>;
    create(dto: TeamUserDTO): Promise<TeamUserDTO>;
    update(id: string, dto: TeamUserDTO): Promise<TeamUserDTO>;
    softDelete(id: string): Promise<TeamUserDTO>;
    hardDelete(id: string): Promise<any>;
}
