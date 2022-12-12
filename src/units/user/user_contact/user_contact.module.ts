import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserContact } from 'src/models/users/user_contact.entity';
import { UserContactController } from './user_contact.controller';
import { UserContactService } from './user_contact.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserContact])],
  providers: [UserContactService],
  controllers: [UserContactController],
  exports: [UserContactService],
})
export class UserContactModule {}
