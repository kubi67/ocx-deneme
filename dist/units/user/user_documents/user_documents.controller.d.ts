import { UserDocumentDTO } from './user_documents.dto';
import { UserDocumentService } from './user_documents.service';
export declare class UserDocumentsController {
    private readonly userDocumentService;
    constructor(userDocumentService: UserDocumentService);
    getAll(): Promise<UserDocumentDTO[]>;
    getAllByStatus(status: boolean): Promise<UserDocumentDTO[]>;
    get(id: string): Promise<UserDocumentDTO>;
    create(dto: UserDocumentDTO): Promise<UserDocumentDTO>;
    update(id: string, dto: UserDocumentDTO): Promise<UserDocumentDTO>;
    softDelete(id: string): Promise<UserDocumentDTO>;
    hardDelete(id: string): Promise<any>;
}
