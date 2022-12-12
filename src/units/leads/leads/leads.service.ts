import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Leads } from 'src/models/leads/leads.entity';
import { RolesDescriptionService } from 'src/units/roles/roles-description/roles-description.service';
import { RolesService } from 'src/units/roles/roles/roles.service';
import { RoleUserService } from 'src/units/user/role_user/role_user.service';
import { UsersService } from 'src/units/user/user/user.service';
import { Repository } from 'typeorm';
import { LeadDTO } from './leads.dto';

@Injectable()
export class LeadsService {
  constructor(
    @InjectRepository(Leads)
    private readonly repo: Repository<Leads>,
    private readonly userService: UsersService,
    private readonly roleService: RolesService,
    private readonly userRoleService: RoleUserService,
    private readonly roleDescriptionService: RolesDescriptionService,
  ) {}

  public async getAll(): Promise<LeadDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => LeadDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<LeadDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => LeadDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<LeadDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => LeadDTO.fromEntity(e)));
  }

  public async getDeliveredLeadsFull(): Promise<any> {
    return await this.repo.query(`SELECT * FROM public."getDeliveredLeadsFull"
`);
  }

  public async getDeliveredLeadsFullByOperator(
    operatorID: string,
  ): Promise<any> {
    return await this.repo
      .query(`SELECT * FROM public."getDeliveredLeadsFull" where assigned_user='${operatorID}'
`);
  }

  public async getDeliveredLeads(): Promise<any> {
    return await this.repo.query(`SELECT * FROM public."getDeliveredLeads"`);
  }

  public async getDeliveredLeadsByOperator(operatorID: string): Promise<any> {
    return await this.repo
      .query(`SELECT * FROM public."getDeliveredLeads" where assigned_user='${operatorID}'
`);
  }

  public async getLeadsByOperator(operatorID: string): Promise<LeadDTO[]> {
    return await this.repo
      .find({ where: { assigned_user: operatorID } })
      .then((datas) => datas.map((e) => LeadDTO.fromEntity(e)));
  }

  public async getByDelivered(delivered: boolean): Promise<LeadDTO[]> {
    return await this.repo
      .find({ where: { isDelivered: delivered } })
      .then((datas) => datas.map((e) => LeadDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<LeadDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => LeadDTO.fromEntity(datas));
  }

  public async create(dto: LeadDTO): Promise<LeadDTO> {
    return await this.repo
      .save(LeadDTO.toEntity(dto))
      .then((e) => LeadDTO.fromEntity(e));
  }

  public async getByCampaign(campaign: string): Promise<LeadDTO[]> {
    return await this.repo
      .find({ where: { campaign_id: campaign } })
      .then((datas) => datas.map((e) => LeadDTO.fromEntity(e)));
  }

  public async getByAssignedUser(assigned: string): Promise<LeadDTO[]> {
    return await this.repo
      .find({ where: { assigned_user: assigned } })
      .then((datas) => datas.map((e) => LeadDTO.fromEntity(e)));
  }

  public async getByBroker(broker: string): Promise<LeadDTO[]> {
    return await this.repo
      .find({ where: { broker_id: broker } })
      .then((datas) => datas.map((e) => LeadDTO.fromEntity(e)));
  }

  public async getByState(state: number): Promise<LeadDTO[]> {
    return await this.repo
      .find({ where: { state: state } })
      .then((datas) => datas.map((e) => LeadDTO.fromEntity(e)));
  }

  public async createSimpleManuel(dto: LeadDTO, id: string): Promise<LeadDTO> {
    const userData = await this.userService.getById(id);
    const userRole = await this.userRoleService.getByUser(userData.id);
    const roles = await this.roleService.getById(userRole.role_id);
    const rolesDescription = await this.roleDescriptionService.getByRoleOne(
      roles.id,
    );

    if (rolesDescription.name === 'lead.operator') {
      dto.broker_id = userData.current_broker_id;
      dto.assigned_user = userData.id;
    }
    if (rolesDescription.name === 'lead.team.manager') {
      dto.broker_id = userData.current_broker_id;
      // burada ki id team_user adlı tablodan gelecek
      dto.assigned_user = userData.id;
    }
    if (
      rolesDescription.name === 'lead.manager' ||
      rolesDescription.name === 'broker.manager'
    ) {
      dto.broker_id = userData.current_broker_id;
      // burada ki id team_user adlı tablodan gelecek
      dto.assigned_user = userData.id;
    }
    return await this.repo
      .save(LeadDTO.toEntity(dto))
      .then((e) => LeadDTO.fromEntity(e));
  }

  public async createSimpleMany(
    dto: LeadDTO,
    id: string,
    count: number,
  ): Promise<LeadDTO> {
    for (let index = 0; index < count; index++) {
      const userData = await this.userService.getById(id);
      const userRole = await this.userRoleService.getByUser(userData.id);
      const roles = await this.roleService.getById(userRole.role_id);
      const rolesDescription = await this.roleDescriptionService.getByRoleOne(
        roles.id,
      );
      if (rolesDescription.name === 'lead.operator') {
        dto.broker_id = userData.current_broker_id;
        dto.assigned_user = userData.id;
      }
      if (rolesDescription.name === 'lead.team.manager') {
        dto.broker_id = userData.current_broker_id;
        // burada ki id team_user adlı tablodan gelecek
        dto.assigned_user = userData.id;
      }
      if (
        rolesDescription.name === 'lead.manager' ||
        rolesDescription.name === 'broker.manager'
      ) {
        dto.broker_id = userData.current_broker_id;
        // burada ki id team_user adlı tablodan gelecek
        dto.assigned_user = userData.id;
      }
      return await this.repo
        .save(LeadDTO.toEntity(dto))
        .then((e) => LeadDTO.fromEntity(e));
    }
  }

  public async update(id: string, dto: LeadDTO): Promise<LeadDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = LeadDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async getAllWithAll(): Promise<any> {
    const data = await this.repo.query(
      `SELECT * FROM public."getLeadsWithAll"`,
    );
    return data;
  }

  public async changeStatus(id: string): Promise<LeadDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = LeadDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<LeadDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = LeadDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}
