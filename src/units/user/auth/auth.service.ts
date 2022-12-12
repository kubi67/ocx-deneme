import { Injectable, Req, Res, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/users/user.entity';
import { Repository } from 'typeorm';
import { LoginUsersDTO } from './auth.dto';
import * as bcrypt from 'bcrypt';
import { RoleUserService } from '../role_user/role_user.service';
import { PermUserService } from '../perm_user/perm_user.service';
import { Request, Response, NextFunction } from 'express';

import { Roles } from 'src/models/rolesNpermissions/roles.entity';
import { RolesService } from 'src/units/roles/roles/roles.service';
import { PermissionsService } from 'src/units/permissions/permissions.service';
import { UsersService } from '../user/user.service';
import { RolesDescriptionService } from 'src/units/roles/roles-description/roles-description.service';
import { UserPermissions } from 'src/models/users/user_permissions.entity';
import { UserLoginService } from '../user_login/user_login.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
    private readonly jwtService: JwtService,
    private readonly roleUserService: RoleUserService,
    private readonly permUserService: PermUserService,
    private readonly roleService: RolesService,
    private readonly permService: PermissionsService,
    private readonly userService: UsersService,
    private readonly roleDescriptionService: RolesDescriptionService,
    private readonly userLoginService: UserLoginService,
  ) {}

  public async auth(
    dto: LoginUsersDTO,
    headers: { 'user-agent': string; ip: string },
    ip: string,
  ): Promise<any> {
    if (dto.email) {
      const getUser = await this.repo
        .findOne({ where: { email: dto.email } })
        .then((datas) => LoginUsersDTO.fromEntity(datas));

      if (!getUser) {
        return new UnauthorizedException(
          null,
          'Unauthorized. Check your mail or username.',
        );
      }
      const checkApprove = await this.userService.getById(getUser.id);
      if (!checkApprove.isApproved || !checkApprove.isVerified) {
        return new UnauthorizedException(null, 'User not approved');
      }
      //const hashed = await bcrypt.hash(dto.password, 5);
      // if (hashed !== getUser.password) {
      //   return new UnauthorizedException(null, 'Wrong password.');
      // }
      const isMatch = await bcrypt.compare(dto.password, getUser.password);
      if (!isMatch) {
        return new UnauthorizedException(null, 'Wrong password.');
      }

      const userProfile = await this.repo.findOne({
        where: { id: getUser.id },
      });

      await this.userLoginService.create({
        id: userProfile.id,
        user_id: userProfile.id,
        ip_addr: `${ip}`,
        last_access_at: new Date(),
        agent: `${headers['user-agent']}`,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: new Date(),
        lastChangedDateTime: new Date(),
        isDeleted: false,
      });

      // get roles and permission by user.
      const userRoles = await this.roleUserService.getByUser(getUser.id);
      const userPermissions = await this.permUserService.getByUser(getUser.id);
      //const roleUser = [];
      const permUser = [];
      const permPages = [];

      // roleUser.push(
      //   await (
      //     await this.roleDescriptionService.getByRoleOne(userRoles.role_id)
      //   ).name,
      // );

      const roleUser = await this.roleDescriptionService.getByRole(
        userRoles.role_id,
      );
      for (let index = 0; index < userPermissions.length; index++) {
        permUser.push(
          await (
            await this.permService.getById(userPermissions[index].permission_id)
          ).name,
        );
        permPages.push(
          await (
            await this.permService.getById(userPermissions[index].permission_id)
          ).name.replace('.', '-'),
        );
      }

      const payload = { user: getUser };

      return {
        access_token: this.jwtService.sign(payload),
        user: userProfile,
        roles: roleUser,
        permissions: permUser,
        permPages,
      };
    }

    if (dto.username) {
      const getUser = await this.repo
        .findOne({ where: { email: dto.email } })
        .then((datas) => LoginUsersDTO.fromEntity(datas));

      if (!getUser) {
        return new UnauthorizedException(
          null,
          'Unauthorized. Check your mail or username.',
        );
      }
      const isMatch = await bcrypt.compare(dto.password, getUser.password);
      if (!isMatch) {
        return new UnauthorizedException(null, 'Wrong password.');
      }
      const checkApprove = await this.userService.getById(getUser.id);
      if (!checkApprove.isApproved || !checkApprove.isVerified) {
        return new UnauthorizedException(null, 'User not approved');
      }
      const userProfile = await this.repo.findOne({
        where: { id: getUser.id },
      });
      await this.userLoginService.create({
        id: userProfile.id,
        user_id: userProfile.id,
        ip_addr: `${ip}`,
        last_access_at: new Date(),
        agent: `${headers['user-agent']}`,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: new Date(),
        lastChangedDateTime: new Date(),
        isDeleted: false,
      });

      // get roles and permission by user.
      const userRoles = await this.roleUserService.getByUser(getUser.id);
      const userPermissions = await this.permUserService.getByUser(getUser.id);
      const roleUser = [];
      const permUser = [];

      roleUser.push(
        await (
          await this.roleDescriptionService.getByRoleOne(userRoles.role_id)
        ).name,
      );
      for (let index = 0; index < userPermissions.length; index++) {
        permUser.push(
          await (
            await this.permService.getById(userPermissions[index].permission_id)
          ).name,
        );
      }
      console.log(roleUser);
      const payload = { user: getUser };

      return {
        access_token: this.jwtService.sign(payload),
        user: userProfile,
        roles: roleUser,
        permissions: permUser,
      };
    }

    return new UnauthorizedException(null, 'Username or mail is required');
  }
}
