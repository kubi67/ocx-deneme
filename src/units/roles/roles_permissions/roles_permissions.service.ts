import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Permission } from 'src/models/rolesNpermissions/permissions.entity';
import { RolePermissions } from 'src/models/rolesNpermissions/role_permissions.entity';
import { PermissionsService } from 'src/units/permissions/permissions.service';
import { Repository } from 'typeorm';
import { RolesService } from '../roles/roles.service';
import { RolesPermissionsDTO } from './roles_permissions.dto';

@Injectable()
export class RolePermissionsService {
  constructor(
    @InjectRepository(RolePermissions)
    private readonly repo: Repository<RolePermissions>,
    private readonly roleService: RolesService,
    private readonly permissionService: PermissionsService,
  ) {}

  public async getAll(): Promise<RolesPermissionsDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => RolesPermissionsDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<RolesPermissionsDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => RolesPermissionsDTO.fromEntity(e)));
  }

  public async getPermsByRole(roleID: string): Promise<RolesPermissionsDTO[]> {
    // const data = await this.repo.find({ where: { role_id: roleID } });
    // const permArray = Array<Permission>();
    // data.map(async (val) => {
    //   //let permissions = await this.permissionService.getById(val.permission_id);
    //   permArray.push(await this.permissionService.getById(val.permission_id));
    // });
    // return permArray;
    return await this.repo
      .find({ where: { role_id: roleID } })
      .then((datas) => datas.map((e) => RolesPermissionsDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<RolesPermissionsDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => RolesPermissionsDTO.fromEntity(datas));
  }

  public async create(dto: RolesPermissionsDTO): Promise<RolesPermissionsDTO> {
    return await this.repo
      .save(RolesPermissionsDTO.toEntity(dto))
      .then((e) => RolesPermissionsDTO.fromEntity(e));
  }

  public async update(
    id: string,
    dto: RolesPermissionsDTO,
  ): Promise<RolesPermissionsDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = RolesPermissionsDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<RolesPermissionsDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = RolesPermissionsDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<RolesPermissionsDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = RolesPermissionsDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}
