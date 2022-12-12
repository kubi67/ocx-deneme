import { NotesDTO } from './notes.dto';
import { NotesService } from './notes.service';
export declare class NotesController {
    private readonly noteService;
    constructor(noteService: NotesService);
    getAll(): Promise<NotesDTO[]>;
    getAllByStatus(status: boolean): Promise<NotesDTO[]>;
    get(id: string): Promise<NotesDTO>;
    getLeadsFull(): Promise<any>;
    getByAuthor(id: string): Promise<NotesDTO[]>;
    getByModelType(id: string): Promise<NotesDTO[]>;
    getByModel(id: string): Promise<NotesDTO[]>;
    update(id: string, dto: NotesDTO): Promise<NotesDTO>;
    softDelete(id: string): Promise<NotesDTO>;
    create(dto: NotesDTO): Promise<NotesDTO>;
    hardDelete(id: string): Promise<any>;
}
