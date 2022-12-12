import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PermissionsService } from 'src/units/permissions/permissions.service';
export declare class RolesGuard implements CanActivate {
    private reflector;
    private readonly permissionService;
    constructor(reflector: Reflector, permissionService: PermissionsService);
    canActivate(context: ExecutionContext): Promise<any>;
}
