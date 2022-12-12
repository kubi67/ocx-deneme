import { SettingsDTO } from './settings.dto';
import { SettingsService } from './settings.service';
export declare class SettingsController {
    private readonly settingService;
    constructor(settingService: SettingsService);
    getAll(): Promise<SettingsDTO[]>;
    getAllByStatus(status: boolean): Promise<SettingsDTO[]>;
    getByModelID(id: string): Promise<SettingsDTO[]>;
    getByModelName(name: string): Promise<SettingsDTO[]>;
    getByCreator(id: string): Promise<SettingsDTO[]>;
    get(id: string): Promise<SettingsDTO>;
    create(dto: SettingsDTO): Promise<SettingsDTO>;
    update(id: string, dto: SettingsDTO): Promise<SettingsDTO>;
    softDelete(id: string): Promise<SettingsDTO>;
    hardDelete(id: string): Promise<any>;
}
