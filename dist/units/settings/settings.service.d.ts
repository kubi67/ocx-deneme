import { Settings } from 'src/models/settings/settings.entity';
import { Repository } from 'typeorm';
import { SettingsDTO } from './settings.dto';
export declare class SettingsService {
    private readonly repo;
    constructor(repo: Repository<Settings>);
    getAll(): Promise<SettingsDTO[]>;
    getByModelID(modelID: string): Promise<SettingsDTO[]>;
    getByModelName(modelName: string): Promise<SettingsDTO[]>;
    getByCreatedBy(createdBy: string): Promise<SettingsDTO[]>;
    getByIdMany(id: string): Promise<SettingsDTO[]>;
    getAllByStatus(status: boolean): Promise<SettingsDTO[]>;
    getById(id: string): Promise<SettingsDTO>;
    create(dto: SettingsDTO): Promise<SettingsDTO>;
    update(id: string, dto: SettingsDTO): Promise<SettingsDTO>;
    changeStatus(id: string): Promise<SettingsDTO>;
    softDelete(id: string): Promise<SettingsDTO>;
    hardDelete(id: string): Promise<any>;
}
