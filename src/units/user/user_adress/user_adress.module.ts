import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAddress } from 'src/models/users/user_adress.entity';
import { UserAdressController } from './user_adress.controller';
import { UserAdressService } from './user_adress.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserAddress])],
  providers: [UserAdressService],
  controllers: [UserAdressController],
  exports: [UserAdressService],
})
export class UserAdressModule {}
