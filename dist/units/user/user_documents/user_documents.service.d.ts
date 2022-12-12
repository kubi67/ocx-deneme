import { UserDocuments } from 'src/models/users/user_documents.entity';
import { Repository } from 'typeorm';
import { UserDocumentDTO } from './user_documents.dto';
export declare class UserDocumentService {
    private readonly repo;
    constructor(repo: Repository<UserDocuments>);
    getAll(): Promise<UserDocumentDTO[]>;
    getAllByStatus(status: boolean): Promise<UserDocumentDTO[]>;
    getByIdMany(id: string): Promise<UserDocumentDTO[]>;
    getById(id: string): Promise<UserDocumentDTO>;
    create(dto: UserDocumentDTO): Promise<UserDocumentDTO>;
    update(id: string, dto: UserDocumentDTO): Promise<UserDocumentDTO>;
    changeStatus(id: string): Promise<UserDocumentDTO>;
    softDelete(id: string): Promise<UserDocumentDTO>;
    hardDelete(id: string): Promise<any>;
}
