"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsTwiceModule = void 0;
const common_1 = require("@nestjs/common");
const reports_service_1 = require("./reports.service");
const reports_controller_1 = require("./reports.controller");
const typeorm_1 = require("@nestjs/typeorm");
const leads_entity_1 = require("../../models/leads/leads.entity");
const leads_module_1 = require("../leads/leads/leads.module");
const user_login_module_1 = require("../user/user_login/user_login.module");
const notes_module_1 = require("../notes/notes/notes.module");
let ReportsTwiceModule = class ReportsTwiceModule {
};
ReportsTwiceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([leads_entity_1.Leads]),
            leads_module_1.LeadsModule,
            user_login_module_1.UserLoginModule,
            notes_module_1.NotesModule,
        ],
        providers: [reports_service_1.ReportsService],
        controllers: [reports_controller_1.ReportsController],
    })
], ReportsTwiceModule);
exports.ReportsTwiceModule = ReportsTwiceModule;
//# sourceMappingURL=reports.module.js.map