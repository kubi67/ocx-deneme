import { Notes } from 'src/models/notes/notes.entity';
import { Repository } from 'typeorm';
import { NotesDTO } from './notes.dto';
export declare class NotesService {
    private readonly repo;
    constructor(repo: Repository<Notes>);
    getAll(): Promise<NotesDTO[]>;
    getAllByStatus(status: boolean): Promise<NotesDTO[]>;
    getByLeadAndOperator(operatorID: string): Promise<NotesDTO[]>;
    getMyNotes(userID?: string): Promise<any>;
    getMyLeadNotes(authorID?: string): Promise<any>;
    getMyUserNotes(authorID: string): Promise<any>;
    getByIdMany(id: string): Promise<NotesDTO[]>;
    getByAuthor(id: string): Promise<NotesDTO[]>;
    getByModelType(id: string): Promise<NotesDTO[]>;
    getByModel(id: string): Promise<NotesDTO[]>;
    getById(id: string): Promise<NotesDTO>;
    create(dto: NotesDTO): Promise<NotesDTO>;
    update(id: string, dto: NotesDTO): Promise<NotesDTO>;
    getAllWithAll(): Promise<any>;
    changeStatus(id: string): Promise<NotesDTO>;
    softDelete(id: string): Promise<NotesDTO>;
    hardDelete(id: string): Promise<any>;
}
