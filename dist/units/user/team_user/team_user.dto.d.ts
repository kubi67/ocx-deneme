import { TeamUser } from 'src/models/users/team_user.entity';
export declare class TeamUserDTO implements Readonly<TeamUserDTO> {
    id: string;
    team_id: string;
    user_id: string;
    role_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<TeamUserDTO>): TeamUserDTO;
    static fromEntity(entity: TeamUser): TeamUserDTO;
    static toEntity(dto: Partial<TeamUserDTO>): TeamUser;
}
