import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/users/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { RegisterUsersDTO } from './register.dto';
import { SendMailService } from 'src/scripts/mailer-scripts/mailer.service';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
    private mailService: SendMailService,
  ) {}

  public async register(dto: RegisterUsersDTO): Promise<RegisterUsersDTO> {
    const userByMail = await this.repo
      .createQueryBuilder('user')
      .select('COUNT (*)', 'count')
      .where('user.email = :name', { name: `${dto.email}` })
      .getCount();
    const userByUserName = await this.repo
      .createQueryBuilder('user')
      .select('COUNT (*)', 'count')
      .where('user.username = :name', { name: `${dto.username}` })
      .getCount();
    if (userByUserName > 0 || userByMail > 0) {
      throw new BadRequestException(
        dto.email,
        'This user is already registered',
      );
    } else {
      dto.password = await bcrypt.hash(dto.password, 5);
      dto.two_factor_recover_code = '';
      dto.two_factor_secret = '';
      dto.isApproved = false;
      dto.isVerified = false;
      const result = await this.repo
        .save(dto)
        .then((e) => RegisterUsersDTO.fromEntity(e));
      this.mailService.sendMail(
        `${dto.email}`,
        'Kullanıcı Doğrulama',
        '',
        `Sn.${dto.firstname} ${dto.lastname}`,
        'overcodex.com',
        'Bilgilendirme - Email Kullanıcı Doğrulama',
        'Aşağıda ki bağlantıyı tıklayarak hesabınızı doğrulayabilirsiniz.',
        `${result.id}`,
      );
      return result;
    }
  }

  public async registerUser(dto: RegisterUsersDTO): Promise<RegisterUsersDTO> {
    const userByMail = await this.repo
      .createQueryBuilder('user')
      .select('COUNT (*)', 'count')
      .where('user.email = :name', { name: `${dto.email}` })
      .getCount();
    const userByUserName = await this.repo
      .createQueryBuilder('user')
      .select('COUNT (*)', 'count')
      .where('user.username = :name', { name: `${dto.username}` })
      .getCount();
    if (userByUserName > 0 || userByMail > 0) {
      throw new BadRequestException(
        dto.email,
        'This user is already registered',
      );
    } else {
      dto.password = await bcrypt.hash(dto.password, 5);
      dto.two_factor_recover_code = '';
      dto.two_factor_secret = '';
      return await this.repo
        .save(dto)
        .then((e) => RegisterUsersDTO.fromEntity(e));
    }
  }
}
