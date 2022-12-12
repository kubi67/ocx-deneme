import { Notes } from 'src/models/notes/notes.entity';
export declare class NotesDTO implements Readonly<NotesDTO> {
    id: string;
    author_id: string;
    model_type: string;
    model_id: string;
    note: string;
    status: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<NotesDTO>): NotesDTO;
    static fromEntity(entity: Notes): NotesDTO;
    static toEntity(dto: Partial<NotesDTO>): Notes;
}
