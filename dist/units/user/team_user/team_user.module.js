"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamUserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const team_user_entity_1 = require("../../../models/users/team_user.entity");
const team_user_controller_1 = require("./team_user.controller");
const team_user_service_1 = require("./team_user.service");
let TeamUserModule = class TeamUserModule {
};
TeamUserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([team_user_entity_1.TeamUser])],
        providers: [team_user_service_1.TeamUserService],
        controllers: [team_user_controller_1.TeamUserController],
        exports: [team_user_service_1.TeamUserService],
    })
], TeamUserModule);
exports.TeamUserModule = TeamUserModule;
//# sourceMappingURL=team_user.module.js.map