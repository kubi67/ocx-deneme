import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NotFoundError } from 'rxjs';
import { TransformInterceptor } from 'src/libs/api-results/standart-results';
import { NotesDTO } from './notes.dto';
import { NotesService } from './notes.service';

@Controller('notes')
@ApiTags('Notes Endpoints')
@UseInterceptors(TransformInterceptor)
export class NotesController {
  constructor(private readonly noteService: NotesService) {}

  @Get()
  public async getAll(): Promise<NotesDTO[]> {
    return await this.noteService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<NotesDTO[]> {
    return await this.noteService.getAllByStatus(status);
  }

  @Get('/get/:id')
  public async get(@Param('id') id: string): Promise<NotesDTO> {
    return await this.noteService.getById(id);
  }

  @Get('/my-notes/:userID?')
  public async getMyNotes(@Query('userID') userID?: string): Promise<any> {
    if (!userID) {
      return new NotFoundError('Not Found Notes!');
    }
    return await this.noteService.getMyNotes(userID);
  }

  @Get('/my-lead-notes/:authorID?')
  public async getMyLeadNotes(
    @Query('authorID') authorID?: string,
  ): Promise<any> {
    return await this.noteService.getMyLeadNotes(authorID);
  }

  @Get('/my-user-notes/:authorID?')
  public async getMyUserNotes(
    @Query('authorID') authorID?: string,
  ): Promise<any> {
    return await this.noteService.getMyUserNotes(authorID);
  }

  @Get('/active-leads/:status')
  public async getLeadsFull() {
    return await this.noteService.getAllWithAll();
  }

  @Get('/get-by-author/:id')
  public async getByAuthor(@Param('id') id: string): Promise<NotesDTO[]> {
    return await this.noteService.getByAuthor(id);
  }

  @Get('/get-by-model-type/:id')
  public async getByModelType(@Param('id') id: string): Promise<NotesDTO[]> {
    return await this.noteService.getByModelType(id);
  }

  @Get('/get-by-model/:id')
  public async getByModel(@Param('id') id: string): Promise<NotesDTO[]> {
    return await this.noteService.getByModel(id);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: NotesDTO,
  ): Promise<NotesDTO> {
    return await this.noteService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<NotesDTO> {
    return await this.noteService.softDelete(id);
  }

  @Post()
  public async create(@Body() dto: NotesDTO): Promise<NotesDTO> {
    return await this.noteService.create(dto);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.noteService.hardDelete(id);
  }
}
