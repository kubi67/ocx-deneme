import fs = require('fs');
import { configService } from 'src/configs/config.service';
fs.writeFileSync(
  'ormconfig.json',
  JSON.stringify(configService.getTypeOrmConfig(), null, 2),
);
