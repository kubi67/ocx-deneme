import { UserDocuments } from 'src/models/users/user_documents.entity';
export declare class UserDocumentDTO implements Readonly<UserDocumentDTO> {
    id: string;
    user_id: string;
    document_type: number;
    path: string;
    approved: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<UserDocumentDTO>): UserDocumentDTO;
    static fromEntity(entity: UserDocuments): UserDocumentDTO;
    static toEntity(dto: Partial<UserDocumentDTO>): UserDocuments;
}
