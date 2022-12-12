"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configService = exports.ConfigService = void 0;
require('dotenv').config();
class ConfigService {
    constructor(env) {
        this.env = env;
    }
    getValue(key, throwOnMissing = true) {
        const value = this.env[key];
        return value;
    }
    ensureValues(keys) {
        keys.forEach((k) => this.getValue(k, true));
        return this;
    }
    getPort() {
        return this.getValue('PORT', true);
    }
    isProduction() {
        const mode = this.getValue('MODE', false);
        return mode != 'DEV';
    }
    getTypeOrmConfig() {
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
            ssl: false,
        };
    }
}
exports.ConfigService = ConfigService;
const configService = new ConfigService(process.env).ensureValues([
    'POSTGRES_HOST',
    'POSTGRES_PORT',
    'POSTGRES_USER',
    'POSTGRES_PASSWORD',
    'POSTGRES_DATABASE',
]);
exports.configService = configService;
//# sourceMappingURL=config.service.js.map