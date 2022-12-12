import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageBoard } from 'src/models/messages/message_board.entity';

@Module({
  imports:[TypeOrmModule.forFeature([MessageBoard])],
  providers: [MessagesService],
  controllers: [MessagesController]
})
export class MessagesModule {}
