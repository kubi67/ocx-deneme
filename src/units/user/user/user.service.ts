import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/users/user.entity';
import { createQueryBuilder, Repository } from 'typeorm';
import { UserDTO } from './user.dto';
import * as bcrypt from 'bcrypt';
import { RolesService } from 'src/units/roles/roles/roles.service';
import { RoleUserService } from '../role_user/role_user.service';
import { PermissionsService } from 'src/units/permissions/permissions.service';
import { PermUserService } from '../perm_user/perm_user.service';
import { UserCreateDTO } from './user-create.dto';
import { RolePermissionsService } from 'src/units/roles/roles_permissions/roles_permissions.service';
import { PermissionDTO } from 'src/units/permissions/permissions.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
    private readonly userRoleService: RoleUserService,
    private readonly permUserService: PermUserService,
    private readonly rolePermService: RolePermissionsService,
  ) {}

  public async getAll(): Promise<UserDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => UserDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<UserDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => UserDTO.fromEntity(e)));
  }

  public async getOperators(): Promise<UserDTO[]> {
    return await this.repo
      .find({ where: { isLeadOperator: true } })
      .then((datas) => datas.map((e) => UserDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<UserDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => UserDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<UserDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => UserDTO.fromEntity(datas));
  }

  // Bütün broker user kullanıcıları alacak endpoint
  // Önce user tablosundan bilgileri alacağız, yada join atacağız.
  // Ancak her bir kullanıcının parenti olup olmadıgına yada broker-admin broker manager gibi olup olmadıgına bakmamız gerek
  // o yüzden user tablosunda yer alan parent_id propuna göre işlemde yapabiliriz

  public async getByBrokerUser(): Promise<any> {
    const query = createQueryBuilder('user', 'u').innerJoinAndSelect(
      'u.watchers',
      'w',
    ); // 'w.userId = u.id' may be omitted
    const result = await query.getMany();
  }

  public async getByVerified(verified: boolean): Promise<UserDTO[]> {
    return await this.repo
      .find({ where: { isVerified: verified } })
      .then((datas) => datas.map((e) => UserDTO.fromEntity(e)));
  }

  public async getTraderUser(): Promise<any> {
    return await this.repo.query(`SELECT * FROM public."getTraderUser"`);
  }

  public async getByApproved(approved: boolean): Promise<UserDTO[]> {
    return await this.repo
      .find({ where: { isApproved: approved } })
      .then((datas) => datas.map((e) => UserDTO.fromEntity(e)));
  }

  public async create(dto: UserCreateDTO): Promise<UserDTO> {
    dto.password = await bcrypt.hash(dto.password, 5);
    const savedUser = await this.repo
      .save(UserDTO.toEntity(dto))
      .then((e) => UserDTO.fromEntity(e));
    const getPermsByRole = await this.rolePermService.getPermsByRole(
      dto.role_id,
    );
    const permArr = Array<PermissionDTO>();

    const saveRole = await this.userRoleService.create({
      id: savedUser.id,
      user_id: savedUser.id,
      role_id: dto.role_id,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),

      assigned_at: new Date(),
      assigned_by: '',
      lastChangedDateTime: new Date(),
      isDeleted: false,
    });
    getPermsByRole.map(async (perm) => {

      const saveUserPerm = await this.permUserService.create({
        user_id: savedUser.id,
        permission_id: perm.permission_id,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: new Date(),
        id: '',
        assigned_at: new Date(),
        assigned_by: '',
        lastChangedDateTime: new Date(),
        isDeleted: false,
      });
    });

    return savedUser;
  }

  public async update(id: string, dto: UserDTO): Promise<UserDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = UserDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<UserDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = UserDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<UserDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = UserDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}
