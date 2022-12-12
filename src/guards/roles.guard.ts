import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ExtractJwt } from 'passport-jwt';
import { Observable } from 'rxjs';
import { Role } from 'src/models/ownered/roles.enum';
import { User } from 'src/models/users/user.entity';
import { PermissionsService } from 'src/units/permissions/permissions.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly permissionService: PermissionsService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<any> {
    const requireRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    const requirePerms = await this.permissionService.getAll();

    if (!requireRoles) {
      return true;
    }

    const requestBody = context.switchToHttp().getRequest();
    // Handle jwt token in header data 
    // const handleToken = requestBody.rawHeaders.filter((x) =>
    //   x.startsWith('Bearer'),
    // );
    // if (handleToken.length > 0) {
    //   const user = {
    //     roles: requestBody.body.user.map((x) => {
    //       return x;
    //     }),
    //   };
    //   return requireRoles.some((role) => user.roles.includes(role));
    // }
    // else{
    //     return new UnauthorizedException(null,"Unauthorized")
    // }
    const user = {
        roles: requestBody.body.user.map((x) => {
          return x;
        }),
      };
      return requireRoles.some((role) => user.roles.includes(role));
  }
}
