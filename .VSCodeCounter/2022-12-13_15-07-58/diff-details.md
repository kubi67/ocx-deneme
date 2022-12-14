# Diff Details

Date : 2022-12-13 15:07:58

Directory /Users/overcodexdev/Desktop/overcodex-projects/ocx-crm-db-service

Total : 108 files,  1968 codes, 11 comments, 136 blanks, all 2115 lines

[Summary](results.md) / [Details](details.md) / [Diff Summary](diff.md) / Diff Details

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [.dockerignore](/.dockerignore) | Ignore | 4 | 0 | 0 | 4 |
| [Dockerfile](/Dockerfile) | Docker | 6 | -9 | 5 | 2 |
| [dist/app.module.js](/dist/app.module.js) | JavaScript | 2 | 0 | 0 | 2 |
| [dist/configs/config.service.js](/dist/configs/config.service.js) | JavaScript | -3 | 0 | 0 | -3 |
| [dist/decorators/role-decorator.d.ts](/dist/decorators/role-decorator.d.ts) | TypeScript | -3 | 0 | -1 | -4 |
| [dist/decorators/role-decorator.js](/dist/decorators/role-decorator.js) | JavaScript | -7 | -1 | 0 | -8 |
| [dist/main.js](/dist/main.js) | JavaScript | 1 | 0 | 0 | 1 |
| [dist/models/brokers/brokers.entity.d.ts](/dist/models/brokers/brokers.entity.d.ts) | TypeScript | 1 | 0 | 0 | 1 |
| [dist/models/brokers/brokers.entity.js](/dist/models/brokers/brokers.entity.js) | JavaScript | 8 | 0 | 0 | 8 |
| [dist/models/rolesNpermissions/roles_description.entity.d.ts](/dist/models/rolesNpermissions/roles_description.entity.d.ts) | TypeScript | 1 | 0 | 0 | 1 |
| [dist/models/rolesNpermissions/roles_description.entity.js](/dist/models/rolesNpermissions/roles_description.entity.js) | JavaScript | 4 | 0 | 0 | 4 |
| [dist/models/users/user.entity.d.ts](/dist/models/users/user.entity.d.ts) | TypeScript | 1 | 0 | 0 | 1 |
| [dist/models/users/user.entity.js](/dist/models/users/user.entity.js) | JavaScript | 4 | 0 | 0 | 4 |
| [dist/units/brokers/brokers/broker.dto.d.ts](/dist/units/brokers/brokers/broker.dto.d.ts) | TypeScript | 1 | 0 | 0 | 1 |
| [dist/units/brokers/brokers/broker.dto.js](/dist/units/brokers/brokers/broker.dto.js) | JavaScript | 7 | 0 | 0 | 7 |
| [dist/units/brokers/brokers/brokers.controller.d.ts](/dist/units/brokers/brokers/brokers.controller.d.ts) | TypeScript | 1 | 0 | 0 | 1 |
| [dist/units/brokers/brokers/brokers.controller.js](/dist/units/brokers/brokers/brokers.controller.js) | JavaScript | 13 | 0 | 0 | 13 |
| [dist/units/brokers/brokers/brokers.service.d.ts](/dist/units/brokers/brokers/brokers.service.d.ts) | TypeScript | 1 | 0 | 0 | 1 |
| [dist/units/brokers/brokers/brokers.service.js](/dist/units/brokers/brokers/brokers.service.js) | JavaScript | 9 | 0 | 0 | 9 |
| [dist/units/external/external.controller.d.ts](/dist/units/external/external.controller.d.ts) | TypeScript | 2 | 0 | 1 | 3 |
| [dist/units/external/external.controller.js](/dist/units/external/external.controller.js) | JavaScript | 16 | 1 | 0 | 17 |
| [dist/units/external/external.module.d.ts](/dist/units/external/external.module.d.ts) | TypeScript | 2 | 0 | 1 | 3 |
| [dist/units/external/external.module.js](/dist/units/external/external.module.js) | JavaScript | 21 | 1 | 0 | 22 |
| [dist/units/external/external.service.d.ts](/dist/units/external/external.service.d.ts) | TypeScript | 2 | 0 | 1 | 3 |
| [dist/units/external/external.service.js](/dist/units/external/external.service.js) | JavaScript | 16 | 1 | 0 | 17 |
| [dist/units/leads/leads/leads.controller.d.ts](/dist/units/leads/leads/leads.controller.d.ts) | TypeScript | 2 | 0 | 0 | 2 |
| [dist/units/leads/leads/leads.controller.js](/dist/units/leads/leads/leads.controller.js) | JavaScript | 23 | 0 | 0 | 23 |
| [dist/units/leads/leads/leads.module.js](/dist/units/leads/leads/leads.module.js) | JavaScript | 2 | 0 | 0 | 2 |
| [dist/units/leads/leads/leads.service.d.ts](/dist/units/leads/leads/leads.service.d.ts) | TypeScript | 4 | 0 | 0 | 4 |
| [dist/units/leads/leads/leads.service.js](/dist/units/leads/leads/leads.service.js) | JavaScript | 29 | 0 | 1 | 30 |
| [dist/units/messages/messages.controller.d.ts](/dist/units/messages/messages.controller.d.ts) | TypeScript | -15 | 0 | -1 | -16 |
| [dist/units/messages/messages.controller.js](/dist/units/messages/messages.controller.js) | JavaScript | -121 | -1 | 0 | -122 |
| [dist/units/messages/messages.dto.d.ts](/dist/units/messages/messages.dto.d.ts) | TypeScript | -14 | 0 | -1 | -15 |
| [dist/units/messages/messages.dto.js](/dist/units/messages/messages.dto.js) | JavaScript | -85 | -1 | 0 | -86 |
| [dist/units/messages/messages.module.d.ts](/dist/units/messages/messages.module.d.ts) | TypeScript | -2 | 0 | -1 | -3 |
| [dist/units/messages/messages.module.js](/dist/units/messages/messages.module.js) | JavaScript | -24 | -1 | 0 | -25 |
| [dist/units/messages/messages.service.d.ts](/dist/units/messages/messages.service.d.ts) | TypeScript | -18 | 0 | -1 | -19 |
| [dist/units/messages/messages.service.js](/dist/units/messages/messages.service.js) | JavaScript | -93 | -1 | 0 | -94 |
| [dist/units/notes/notes/notes.controller.d.ts](/dist/units/notes/notes/notes.controller.d.ts) | TypeScript | 3 | 0 | 0 | 3 |
| [dist/units/notes/notes/notes.controller.js](/dist/units/notes/notes/notes.controller.js) | JavaScript | 34 | 0 | 0 | 34 |
| [dist/units/notes/notes/notes.module.js](/dist/units/notes/notes/notes.module.js) | JavaScript | 1 | 0 | 0 | 1 |
| [dist/units/notes/notes/notes.service.d.ts](/dist/units/notes/notes/notes.service.d.ts) | TypeScript | 4 | 0 | 0 | 4 |
| [dist/units/notes/notes/notes.service.js](/dist/units/notes/notes/notes.service.js) | JavaScript | 42 | 0 | 0 | 42 |
| [dist/units/notification/notification.controller.d.ts](/dist/units/notification/notification.controller.d.ts) | TypeScript | -2 | 0 | -1 | -3 |
| [dist/units/notification/notification.controller.js](/dist/units/notification/notification.controller.js) | JavaScript | -16 | -1 | 0 | -17 |
| [dist/units/notification/notification.module.d.ts](/dist/units/notification/notification.module.d.ts) | TypeScript | -2 | 0 | -1 | -3 |
| [dist/units/notification/notification.module.js](/dist/units/notification/notification.module.js) | JavaScript | -21 | -1 | 0 | -22 |
| [dist/units/notification/notification.service.d.ts](/dist/units/notification/notification.service.d.ts) | TypeScript | -2 | 0 | -1 | -3 |
| [dist/units/notification/notification.service.js](/dist/units/notification/notification.service.js) | JavaScript | -16 | -1 | 0 | -17 |
| [dist/units/reports/reports.controller.d.ts](/dist/units/reports/reports.controller.d.ts) | TypeScript | 9 | 0 | 0 | 9 |
| [dist/units/reports/reports.controller.js](/dist/units/reports/reports.controller.js) | JavaScript | 162 | 0 | 0 | 162 |
| [dist/units/reports/reports.module.js](/dist/units/reports/reports.module.js) | JavaScript | 11 | 0 | 0 | 11 |
| [dist/units/reports/reports.service.d.ts](/dist/units/reports/reports.service.d.ts) | TypeScript | 43 | 0 | 0 | 43 |
| [dist/units/reports/reports.service.js](/dist/units/reports/reports.service.js) | JavaScript | 377 | 0 | 6 | 383 |
| [dist/units/roles/roles-description/roles-description.dto.d.ts](/dist/units/roles/roles-description/roles-description.dto.d.ts) | TypeScript | 1 | 0 | 0 | 1 |
| [dist/units/roles/roles-description/roles-description.dto.js](/dist/units/roles/roles-description/roles-description.dto.js) | JavaScript | 7 | 0 | 0 | 7 |
| [dist/units/roles/roles_permissions/roles_permissions.module.js](/dist/units/roles/roles_permissions/roles_permissions.module.js) | JavaScript | 1 | 0 | 0 | 1 |
| [dist/units/roles/roles_permissions/roles_permissions.service.js](/dist/units/roles/roles_permissions/roles_permissions.service.js) | JavaScript | -3 | 0 | 0 | -3 |
| [dist/units/user/auth/auth.service.js](/dist/units/user/auth/auth.service.js) | JavaScript | -1 | 0 | 0 | -1 |
| [dist/units/user/user/user-create.dto.d.ts](/dist/units/user/user/user-create.dto.d.ts) | TypeScript | 36 | 0 | 1 | 37 |
| [dist/units/user/user/user-create.dto.js](/dist/units/user/user/user-create.dto.js) | JavaScript | 242 | 1 | 0 | 243 |
| [dist/units/user/user/user.controller.d.ts](/dist/units/user/user/user.controller.d.ts) | TypeScript | 5 | 0 | 0 | 5 |
| [dist/units/user/user/user.controller.js](/dist/units/user/user/user.controller.js) | JavaScript | 22 | 0 | 0 | 22 |
| [dist/units/user/user/user.dto.d.ts](/dist/units/user/user/user.dto.d.ts) | TypeScript | 1 | 0 | 0 | 1 |
| [dist/units/user/user/user.dto.js](/dist/units/user/user/user.dto.js) | JavaScript | 6 | 0 | 0 | 6 |
| [dist/units/user/user/user.module.js](/dist/units/user/user/user.module.js) | JavaScript | 14 | 0 | 0 | 14 |
| [dist/units/user/user/user.service.d.ts](/dist/units/user/user/user.service.d.ts) | TypeScript | 8 | 0 | 0 | 8 |
| [dist/units/user/user/user.service.js](/dist/units/user/user/user.service.js) | JavaScript | 43 | 0 | 0 | 43 |
| [dist/units/user/user_login/user_login.service.d.ts](/dist/units/user/user_login/user_login.service.d.ts) | TypeScript | 1 | 0 | 0 | 1 |
| [dist/units/user/user_login/user_login.service.js](/dist/units/user/user_login/user_login.service.js) | JavaScript | 5 | 0 | 0 | 5 |
| [package-lock.json](/package-lock.json) | JSON | 66 | 0 | 0 | 66 |
| [package.json](/package.json) | JSON | 1 | 0 | 0 | 1 |
| [src/app.module.ts](/src/app.module.ts) | TypeScript | 2 | 0 | 0 | 2 |
| [src/configs/config.service.ts](/src/configs/config.service.ts) | TypeScript | -3 | 3 | 0 | 0 |
| [src/main.ts](/src/main.ts) | TypeScript | 1 | 0 | 1 | 2 |
| [src/models/brokers/brokers.entity.ts](/src/models/brokers/brokers.entity.ts) | TypeScript | 6 | 0 | 0 | 6 |
| [src/models/rolesNpermissions/roles_description.entity.ts](/src/models/rolesNpermissions/roles_description.entity.ts) | TypeScript | 2 | 0 | 1 | 3 |
| [src/models/users/user.entity.ts](/src/models/users/user.entity.ts) | TypeScript | 2 | 0 | 1 | 3 |
| [src/units/brokers/brokers/broker.dto.ts](/src/units/brokers/brokers/broker.dto.ts) | TypeScript | 5 | 0 | 1 | 6 |
| [src/units/brokers/brokers/brokers.controller.ts](/src/units/brokers/brokers/brokers.controller.ts) | TypeScript | 8 | 0 | 1 | 9 |
| [src/units/brokers/brokers/brokers.service.ts](/src/units/brokers/brokers/brokers.service.ts) | TypeScript | 9 | 0 | 1 | 10 |
| [src/units/external/external.controller.spec.ts](/src/units/external/external.controller.spec.ts) | TypeScript | 14 | 0 | 5 | 19 |
| [src/units/external/external.controller.ts](/src/units/external/external.controller.ts) | TypeScript | 3 | 0 | 2 | 5 |
| [src/units/external/external.module.ts](/src/units/external/external.module.ts) | TypeScript | 8 | 0 | 2 | 10 |
| [src/units/external/external.service.spec.ts](/src/units/external/external.service.spec.ts) | TypeScript | 14 | 0 | 5 | 19 |
| [src/units/external/external.service.ts](/src/units/external/external.service.ts) | TypeScript | 3 | 0 | 2 | 5 |
| [src/units/leads/leads/leads.controller.ts](/src/units/leads/leads/leads.controller.ts) | TypeScript | 12 | 0 | 2 | 14 |
| [src/units/leads/leads/leads.module.ts](/src/units/leads/leads/leads.module.ts) | TypeScript | 2 | 0 | 0 | 2 |
| [src/units/leads/leads/leads.service.ts](/src/units/leads/leads/leads.service.ts) | TypeScript | 28 | 1 | 4 | 33 |
| [src/units/notes/notes/notes.controller.ts](/src/units/notes/notes/notes.controller.ts) | TypeScript | 22 | 0 | 3 | 25 |
| [src/units/notes/notes/notes.module.ts](/src/units/notes/notes/notes.module.ts) | TypeScript | 1 | 0 | 0 | 1 |
| [src/units/notes/notes/notes.service.ts](/src/units/notes/notes/notes.service.ts) | TypeScript | 42 | 0 | 2 | 44 |
| [src/units/reports/reports.controller.spec.ts](/src/units/reports/reports.controller.spec.ts) | TypeScript | 14 | 0 | 5 | 19 |
| [src/units/reports/reports.controller.ts](/src/units/reports/reports.controller.ts) | TypeScript | 193 | 0 | 18 | 211 |
| [src/units/reports/reports.module.ts](/src/units/reports/reports.module.ts) | TypeScript | 19 | 0 | 2 | 21 |
| [src/units/reports/reports.service.spec.ts](/src/units/reports/reports.service.spec.ts) | TypeScript | 14 | 0 | 5 | 19 |
| [src/units/reports/reports.service.ts](/src/units/reports/reports.service.ts) | TypeScript | 409 | 4 | 33 | 446 |
| [src/units/roles/roles-description/roles-description.dto.ts](/src/units/roles/roles-description/roles-description.dto.ts) | TypeScript | 5 | 0 | 1 | 6 |
| [src/units/roles/roles-description/roles-description.service.ts](/src/units/roles/roles-description/roles-description.service.ts) | TypeScript | 0 | 0 | 1 | 1 |
| [src/units/roles/roles_permissions/roles_permissions.module.ts](/src/units/roles/roles_permissions/roles_permissions.module.ts) | TypeScript | 1 | 0 | 0 | 1 |
| [src/units/roles/roles_permissions/roles_permissions.service.ts](/src/units/roles/roles_permissions/roles_permissions.service.ts) | TypeScript | -3 | 6 | 0 | 3 |
| [src/units/user/auth/auth.service.ts](/src/units/user/auth/auth.service.ts) | TypeScript | -3 | 10 | 1 | 8 |
| [src/units/user/user/user-create.dto.ts](/src/units/user/user/user-create.dto.ts) | TypeScript | 176 | 0 | 22 | 198 |
| [src/units/user/user/user.controller.ts](/src/units/user/user/user.controller.ts) | TypeScript | 13 | 0 | 2 | 15 |
| [src/units/user/user/user.dto.ts](/src/units/user/user/user.dto.ts) | TypeScript | 4 | 0 | 1 | 5 |
| [src/units/user/user/user.module.ts](/src/units/user/user/user.module.ts) | TypeScript | 14 | 0 | 0 | 14 |
| [src/units/user/user/user.service.ts](/src/units/user/user/user.service.ts) | TypeScript | 46 | 0 | 3 | 49 |
| [src/units/user/user_login/user_login.service.ts](/src/units/user/user_login/user_login.service.ts) | TypeScript | 5 | 0 | 1 | 6 |

[Summary](results.md) / [Details](details.md) / [Diff Summary](diff.md) / Diff Details