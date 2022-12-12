import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    // if (!value && throwOnMissing) {
    //   throw new Error(`config error - missing env.${key}`);
    // }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, true));
    return this;
  }

  public getPort() {
    return this.getValue('PORT', true);
  }

  public isProduction() {
    const mode = this.getValue('MODE', false);
    return mode != 'DEV';
  }

  //"pretypeorm": "(del ormconfig.json || :) && ts-node -r tsconfig-paths/register src/scripts/write-type-orm-config.ts",
  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',

      host: `${process.env.POSTGRES_HOST}`,

      port: Number(process.env.POSTGRES_PORT),
      username: `${process.env.POSTGRES_USER}`,
      password: `${process.env.POSTGRES_PASSWORD}`,
      database: `${process.env.POSTGRES_DATABASE}`,

      synchronize: false,
      entities: ['dist/**/*.entity{*.ts,*.js}'],

      migrationsTableName: 'migrations',

      migrations: ['src/migrations/*.ts'],

      // cli: {
      //   migrationsDir: 'src/migrations',
      // },

      ssl: false, //this.isProduction(),
    };
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'POSTGRES_HOST',
  'POSTGRES_PORT',
  'POSTGRES_USER',
  'POSTGRES_PASSWORD',
  'POSTGRES_DATABASE',
]);

export { configService };
