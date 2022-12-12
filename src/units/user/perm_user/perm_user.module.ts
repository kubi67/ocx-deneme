import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPermissions } from 'src/models/users/user_permissions.entity';
import { UserPermController } from './perm_user.controller';
import { PermUserService } from './perm_user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserPermissions])],
  providers: [PermUserService],
  controllers: [UserPermController],
  exports: [PermUserService],
})
export class PermUserModule {}
