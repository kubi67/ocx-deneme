import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'calendar_detail' })
export class CalendarDetail extends BaseEntity {
  @Column({ type: 'uuid' })
  calendar_id: string;

  @Column({ type: 'uuid' })
  calendar_space_id: string;

  // takvim içerikleri
  // sırasıyla indexler
  // month
  // monthNumber
  // dayNumber => ayın kaçı ?
  // allDay,
  // endDate,
  // extendedProps => Gün öğeleri
  // startDate
  // title
  // url
  @Column({ type: 'simple-array', array: true })
  calendar_days: string[];

  @Column({ type: 'character varying', length: 128 })
  description: string;
}
