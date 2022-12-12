import { Team } from 'src/models/teams/teams.entity';
export declare class TeamsDTO implements Readonly<TeamsDTO> {
    id: string;
    broker_id: string;
    name: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<TeamsDTO>): TeamsDTO;
    static fromEntity(entity: Team): TeamsDTO;
    static toEntity(dto: Partial<TeamsDTO>): Team;
}
