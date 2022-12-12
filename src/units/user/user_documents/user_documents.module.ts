import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDocuments } from 'src/models/users/user_documents.entity';
import { UserDocumentsController } from './user_documents.controller';
import { UserDocumentService } from './user_documents.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserDocuments])],
  providers: [UserDocumentService],
  controllers: [UserDocumentsController],
  exports: [UserDocumentService],
})
export class UserDocumentModule {}
