"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_service_1 = require("./configs/config.service");
const roles_guard_1 = require("./guards/roles.guard");
const logger_module_1 = require("./libs/logger/logger.module");
const logger_service_1 = require("./libs/logger/logger.service");
const lead_source_types_entity_1 = require("./models/leads/lead_source_types.entity");
const team_user_entity_1 = require("./models/users/team_user.entity");
const mailer_module_1 = require("./scripts/mailer-scripts/mailer.module");
const audit_logs_module_1 = require("./units/audit-logs/audit-logs.module");
const brokers_module_1 = require("./units/brokers/brokers/brokers.module");
const broker_affiliate_module_1 = require("./units/brokers/broker_affiliate/broker_affiliate.module");
const broker_user_module_1 = require("./units/brokers/broker_user/broker_user.module");
const calendar_detail_module_1 = require("./units/calendars/calendar-detail/calendar-detail.module");
const calendar_space_module_1 = require("./units/calendars/calendar-space/calendar-space.module");
const calendar_module_1 = require("./units/calendars/calendar/calendar.module");
const campaigns_module_1 = require("./units/campaigns/campaigns.module");
const cc_calls_module_1 = require("./units/cc-calls/cc-calls.module");
const ld_rules_description_module_1 = require("./units/deliveries/ld-rules-description/ld-rules-description.module");
const ld_rules_module_1 = require("./units/deliveries/ld-rules/ld-rules.module");
const ld_strategy_rules_module_1 = require("./units/deliveries/ld-strategy-rules/ld-strategy-rules.module");
const ld_strategy_module_1 = require("./units/deliveries/ld-strategy/ld-strategy.module");
const lead_state_description_module_1 = require("./units/leads/lead-state-description/lead-state-description.module");
const lead_states_module_1 = require("./units/leads/lead-states/lead-states.module");
const leadpools_module_1 = require("./units/leads/leadpools/leadpools.module");
const leads_module_1 = require("./units/leads/leads/leads.module");
const messages_module_1 = require("./units/message/messages/messages.module");
const message_delivery_module_1 = require("./units/message/message_delivery/message_delivery.module");
const notes_module_1 = require("./units/notes/notes/notes.module");
const note_delivery_module_1 = require("./units/notes/note_delivery/note_delivery.module");
const notification_delivery_module_1 = require("./units/notifications/notification-delivery/notification-delivery.module");
const notification_module_1 = require("./units/notifications/notification/notification.module");
const permissions_module_1 = require("./units/permissions/permissions.module");
const reports_module_1 = require("./units/reports/report/reports.module");
const reports_user_module_1 = require("./units/reports/reports-user/reports-user.module");
const reports_module_2 = require("./units/reports/reports.module");
const roles_description_module_1 = require("./units/roles/roles-description/roles-description.module");
const roles_module_1 = require("./units/roles/roles/roles.module");
const settings_module_1 = require("./units/settings/settings.module");
const tasks_module_1 = require("./units/tasks/tasks.module");
const teams_module_1 = require("./units/teams/teams.module");
const auth_module_1 = require("./units/user/auth/auth.module");
const perm_user_module_1 = require("./units/user/perm_user/perm_user.module");
const register_module_1 = require("./units/user/register/register.module");
const role_user_module_1 = require("./units/user/role_user/role_user.module");
const team_user_module_1 = require("./units/user/team_user/team_user.module");
const user_module_1 = require("./units/user/user/user.module");
const user_adress_module_1 = require("./units/user/user_adress/user_adress.module");
const user_contact_module_1 = require("./units/user/user_contact/user_contact.module");
const user_documents_module_1 = require("./units/user/user_documents/user_documents.module");
const user_login_module_1 = require("./units/user/user_login/user_login.module");
const user_performance_module_1 = require("./units/user/user_performance/user_performance.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_service_1.LoggerMiddleware).forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(config_service_1.configService.getTypeOrmConfig()),
            team_user_entity_1.TeamUser,
            auth_module_1.AuthModule,
            register_module_1.RegisterModule,
            permissions_module_1.PermissionsModule,
            roles_module_1.RolesModule,
            role_user_module_1.RoleUserModule,
            perm_user_module_1.PermUserModule,
            user_module_1.UserModule,
            user_adress_module_1.UserAdressModule,
            user_contact_module_1.UserContactModule,
            user_documents_module_1.UserDocumentModule,
            user_login_module_1.UserLoginModule,
            brokers_module_1.BrokerModule,
            broker_affiliate_module_1.BrokerAffiliateModule,
            broker_user_module_1.BrokerUserModule,
            leadpools_module_1.LeadpoolsModule,
            leads_module_1.LeadsModule,
            user_performance_module_1.UserPerformanceModule,
            lead_states_module_1.LeadStatesModule,
            lead_source_types_entity_1.LeadSourceTypes,
            lead_state_description_module_1.LeadStateDescriptionModule,
            teams_module_1.TeamsModule,
            team_user_module_1.TeamUserModule,
            tasks_module_1.TasksModule,
            campaigns_module_1.CampaignsModule,
            cc_calls_module_1.CcCallsModule,
            roles_description_module_1.RolesDescriptionModule,
            settings_module_1.SettingsModule,
            ld_rules_module_1.LdRulesModule,
            ld_rules_description_module_1.LdRulesDescriptionModule,
            ld_strategy_module_1.LdStrategyModule,
            ld_strategy_rules_module_1.LdStrategyRulesModule,
            notes_module_1.NotesModule,
            note_delivery_module_1.NoteDeliveryModule,
            mailer_module_1.MailModule,
            audit_logs_module_1.AuditLogsModule,
            messages_module_1.MessagesModule,
            message_delivery_module_1.MessageDeliveryModule,
            notification_module_1.NotificationModule,
            notification_delivery_module_1.NotificationDeliveryModule,
            reports_module_1.ReportsModule,
            reports_user_module_1.ReportsUserModule,
            logger_module_1.LoggerModule,
            calendar_module_1.CalendarModule,
            calendar_space_module_1.CalendarSpaceModule,
            calendar_detail_module_1.CalendarDetailModule,
            reports_module_2.ReportsTwiceModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: roles_guard_1.RolesGuard,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map