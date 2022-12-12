import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteDelivery } from 'src/models/notes/note_delivery.entity';
import { NoteDeliveryController } from './note_delivery.controller';
import { NoteDeliveryService } from './note_delivery.service';

@Module({
  imports:[TypeOrmModule.forFeature([NoteDelivery])],
  controllers: [NoteDeliveryController],
  providers: [NoteDeliveryService]
})
export class NoteDeliveryModule {}
