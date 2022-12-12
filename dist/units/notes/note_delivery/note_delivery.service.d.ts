import { NoteDelivery } from 'src/models/notes/note_delivery.entity';
import { Repository } from 'typeorm';
import { NoteDeliveryDTO } from './note_delivery.dto';
export declare class NoteDeliveryService {
    private readonly repo;
    constructor(repo: Repository<NoteDelivery>);
    getAll(): Promise<NoteDeliveryDTO[]>;
    getAllByStatus(status: boolean): Promise<NoteDeliveryDTO[]>;
    getByIdMany(id: string): Promise<NoteDeliveryDTO[]>;
    getByUser(id: string): Promise<NoteDeliveryDTO[]>;
    getByNote(id: string): Promise<NoteDeliveryDTO[]>;
    getById(id: string): Promise<NoteDeliveryDTO>;
    create(dto: NoteDeliveryDTO): Promise<NoteDeliveryDTO>;
    update(id: string, dto: NoteDeliveryDTO): Promise<NoteDeliveryDTO>;
    getAllWithAll(): Promise<any>;
    changeStatus(id: string): Promise<NoteDeliveryDTO>;
    softDelete(id: string): Promise<NoteDeliveryDTO>;
    hardDelete(id: string): Promise<any>;
}
