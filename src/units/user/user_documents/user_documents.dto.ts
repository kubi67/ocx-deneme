import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { UserDocuments } from 'src/models/users/user_documents.entity';

export class UserDocumentDTO implements Readonly<UserDocumentDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  user_id: string;

  @ApiProperty({ required: true })
  document_type: number;

  @ApiProperty({ required: true })
  path: string;

  @ApiProperty({ required: true })
  approved: boolean;

  @ApiProperty({ required: false })
  created_at: Date;

  @ApiProperty({ required: false })
  updated_at: Date;

  @ApiProperty({ required: false })
  deleted_at: Date;

  @ApiProperty({ required: false })
  lastChangedDateTime: Date;

  @ApiProperty({ required: false })
  isDeleted: boolean;

  public static from(dto: Partial<UserDocumentDTO>) {
    const it = new UserDocumentDTO();
    it.id = it.id;
    it.user_id = dto.user_id;
    it.document_type = dto.document_type;
    it.path = dto.path;
    it.approved = dto.approved;

    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: UserDocuments) {
    return this.from({
      id: entity.id,
      user_id: entity.user_id,
      document_type: entity.document_type,
      path: entity.path,
      approved: entity.approved,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<UserDocumentDTO>) {
    const givenData = new UserDocuments();
    givenData.id = dto.id;
    givenData.user_id = dto.user_id;
    givenData.document_type = dto.document_type;
    givenData.path = dto.path;
    givenData.approved = dto.approved;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}
