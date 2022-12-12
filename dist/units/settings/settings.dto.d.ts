import { Settings } from 'src/models/settings/settings.entity';
export declare class SettingsDTO implements Readonly<SettingsDTO> {
    id: string;
    model_id: string;
    model: string;
    code: string;
    key: string;
    value: string;
    created_by: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<SettingsDTO>): SettingsDTO;
    static fromEntity(entity: Settings): SettingsDTO;
    static toEntity(dto: Partial<SettingsDTO>): Settings;
}
