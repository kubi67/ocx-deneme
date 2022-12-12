"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = void 0;
const typeorm_1 = require("typeorm");
const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'postgres',
                host: '127.0.0.1',
                port: 5432,
                username: 'postgres',
                password: '1234',
                database: 'OCXCRM',
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true,
            });
            return dataSource.initialize();
        },
    },
];
function getConfig() {
    return {
        type: 'postgres',
        host: '127.0.0.1',
        port: 5432,
        username: 'postgres',
        password: '1234',
        database: 'OCXCRM',
        migrations: ['src/migrations/*.ts'],
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
    };
}
exports.getConfig = getConfig;
//# sourceMappingURL=dataSource.service.js.map