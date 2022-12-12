"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrmConfig = exports.typeOrmModuleOptions = void 0;
exports.typeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: [__dirname + '/../**/entities/*.entity.{ts,js}'],
    autoLoadEntities: true,
};
exports.OrmConfig = Object.assign(Object.assign({}, exports.typeOrmModuleOptions), { migrationsTableName: 'migrations', migrations: ['src/migrations/*.ts'], cli: {
        migrationDir: 'src/migrations',
    } });
exports.default = exports.OrmConfig;
//# sourceMappingURL=orm.config.js.map