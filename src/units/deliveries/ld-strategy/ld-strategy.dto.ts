import { ApiProperty } from '@nestjs/swagger';
import { LdRules } from 'src/models/deliveries/ld_rules.entity';
import { LdStrategy } from 'src/models/deliveries/ld_strategy.entity';

export class LdStrategyDTO implements Readonly<LdStrategyDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  priority: number;

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

  public static from(dto: Partial<LdStrategyDTO>) {
    const it = new LdStrategyDTO();
    it.id = it.id;
    it.name = it.name;
    it.priority = it.priority;

    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: LdStrategy) {
    return this.from({
      id: entity.id,
      name: entity.name,
      priority: entity.priority,

      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<LdStrategyDTO>) {
    const givenData = new LdStrategy();
    givenData.id = dto.id;
    givenData.name = dto.name;
    givenData.priority = dto.priority;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}
