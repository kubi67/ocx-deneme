import { ApiProperty } from '@nestjs/swagger';
import { LdRules } from 'src/models/deliveries/ld_rules.entity';
import { LdStrategy } from 'src/models/deliveries/ld_strategy.entity';
import { LdStrategyRules } from 'src/models/deliveries/ld_strategy_rules.entity';

export class LdStrategyRulesDTO implements Readonly<LdStrategyRulesDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  ld_strategy_id: string;

  @ApiProperty({ required: true })
  ld_rule_id: string;

  @ApiProperty({ required: true })
  sort_order: number;

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

  public static from(dto: Partial<LdStrategyRulesDTO>) {
    const it = new LdStrategyRulesDTO();
    it.id = dto.id;
    it.ld_strategy_id = dto.ld_strategy_id;
    it.ld_rule_id = dto.ld_rule_id;
    it.sort_order = dto.sort_order;

    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: LdStrategyRules) {
    return this.from({
      id: entity.id,
      ld_strategy_id : entity.ld_strategy_id,
      ld_rule_id : entity.ld_rule_id,
      sort_order : entity.sort_order,

      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<LdStrategyRulesDTO>) {
    const givenData = new LdStrategyRules();
    givenData.id = dto.id;
    givenData.ld_strategy_id = dto.ld_strategy_id;
    givenData.ld_rule_id = dto.ld_rule_id;
    givenData.sort_order = dto.sort_order;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}
