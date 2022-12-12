import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './configs/config.service';
import { RolesGuard } from './guards/roles.guard';
import { LoggerModule } from './libs/logger/logger.module';
import { LoggerMiddleware } from './libs/logger/logger.service';
import { CalendarDetail } from './models/calendars/calendar-detail.entity';
import { LeadSourceTypes } from './models/leads/lead_source_types.entity';
import { TeamUser } from './models/users/team_user.entity';
import { MailModule } from './scripts/mailer-scripts/mailer.module';
import { AuditLogsModule } from './units/audit-logs/audit-logs.module';
import { BrokerModule } from './units/brokers/brokers/brokers.module';
import { BrokerAffiliateModule } from './units/brokers/broker_affiliate/broker_affiliate.module';
import { BrokerUserModule } from './units/brokers/broker_user/broker_user.module';
import { CalendarDetailModule } from './units/calendars/calendar-detail/calendar-detail.module';
import { CalendarSpaceModule } from './units/calendars/calendar-space/calendar-space.module';
import { CalendarModule } from './units/calendars/calendar/calendar.module';
import { CampaignsModule } from './units/campaigns/campaigns.module';
import { CcCallsModule } from './units/cc-calls/cc-calls.module';
import { LdRulesDescriptionModule } from './units/deliveries/ld-rules-description/ld-rules-description.module';
import { LdRulesModule } from './units/deliveries/ld-rules/ld-rules.module';
import { LdStrategyRulesModule } from './units/deliveries/ld-strategy-rules/ld-strategy-rules.module';
import { LdStrategyModule } from './units/deliveries/ld-strategy/ld-strategy.module';
import { LeadStateDescriptionModule } from './units/leads/lead-state-description/lead-state-description.module';
import { LeadStatesModule } from './units/leads/lead-states/lead-states.module';
import { LeadpoolsModule } from './units/leads/leadpools/leadpools.module';
import { LeadsModule } from './units/leads/leads/leads.module';
import { MessagesModule } from './units/message/messages/messages.module';
import { MessageDeliveryModule } from './units/message/message_delivery/message_delivery.module';
import { NotesModule } from './units/notes/notes/notes.module';
import { NoteDeliveryModule } from './units/notes/note_delivery/note_delivery.module';
import { NotificationDeliveryModule } from './units/notifications/notification-delivery/notification-delivery.module';
import { NotificationModule } from './units/notifications/notification/notification.module';
import { PermissionsModule } from './units/permissions/permissions.module';
import { ReportsModule } from './units/reports/report/reports.module';
import { ReportsUserModule } from './units/reports/reports-user/reports-user.module';
import { ReportsTwiceModule } from './units/reports/reports.module';
import { RolesDescriptionModule } from './units/roles/roles-description/roles-description.module';
import { RolesModule } from './units/roles/roles/roles.module';
import { SettingsModule } from './units/settings/settings.module';
import { TasksModule } from './units/tasks/tasks.module';
import { TeamsModule } from './units/teams/teams.module';
import { AuthModule } from './units/user/auth/auth.module';
import { PermUserModule } from './units/user/perm_user/perm_user.module';
import { RegisterModule } from './units/user/register/register.module';
import { RoleUserModule } from './units/user/role_user/role_user.module';
import { TeamUserModule } from './units/user/team_user/team_user.module';
import { UserModule } from './units/user/user/user.module';
import { UserAdressModule } from './units/user/user_adress/user_adress.module';
import { UserContactModule } from './units/user/user_contact/user_contact.module';
import { UserDocumentModule } from './units/user/user_documents/user_documents.module';
import { UserLayerModule } from './units/user/user_layer.module';
import { UserLoginModule } from './units/user/user_login/user_login.module';
import { UserPerformanceModule } from './units/user/user_performance/user_performance.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TeamUser,
    AuthModule,
    RegisterModule,
    PermissionsModule,
    RolesModule,
    //UserLayerModule,
    RoleUserModule,
    PermUserModule,
    UserModule,
    UserAdressModule,
    UserContactModule,
    UserDocumentModule,
    UserLoginModule,
    BrokerModule,
    BrokerAffiliateModule,
    BrokerUserModule,
    LeadpoolsModule,
    LeadsModule,
    UserPerformanceModule,
    LeadStatesModule,
    LeadSourceTypes,
    LeadStateDescriptionModule,
    TeamsModule,
    TeamUserModule,
    TasksModule,
    CampaignsModule,
    CcCallsModule,
    RolesDescriptionModule,
    SettingsModule,
    LdRulesModule,
    LdRulesDescriptionModule,
    LdStrategyModule,
    LdStrategyRulesModule,
    NotesModule,
    NoteDeliveryModule,
    MailModule,
    AuditLogsModule,
    MessagesModule,
    MessageDeliveryModule,
    NotificationModule,
    NotificationDeliveryModule,
    ReportsModule,
    ReportsUserModule,
    LoggerModule,
    CalendarModule,
    CalendarSpaceModule,
    CalendarDetailModule,
    ReportsTwiceModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
