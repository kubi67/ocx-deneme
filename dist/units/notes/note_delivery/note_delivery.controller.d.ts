import { NoteDeliveryDTO } from './note_delivery.dto';
import { NoteDeliveryService } from './note_delivery.service';
export declare class NoteDeliveryController {
    private readonly noteDeliveriesService;
    constructor(noteDeliveriesService: NoteDeliveryService);
    getAll(): Promise<NoteDeliveryDTO[]>;
    getAllByStatus(status: boolean): Promise<NoteDeliveryDTO[]>;
    get(id: string): Promise<NoteDeliveryDTO>;
    getLeadsFull(): Promise<any>;
    getByNote(id: string): Promise<NoteDeliveryDTO[]>;
    getByUser(id: string): Promise<NoteDeliveryDTO[]>;
    update(id: string, dto: NoteDeliveryDTO): Promise<NoteDeliveryDTO>;
    softDelete(id: string): Promise<NoteDeliveryDTO>;
    hardDelete(id: string): Promise<any>;
}
