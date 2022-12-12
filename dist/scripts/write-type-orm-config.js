"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const config_service_1 = require("../configs/config.service");
fs.writeFileSync('ormconfig.json', JSON.stringify(config_service_1.configService.getTypeOrmConfig(), null, 2));
//# sourceMappingURL=write-type-orm-config.js.map