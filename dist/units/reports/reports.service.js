"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const leads_entity_1 = require("../../models/leads/leads.entity");
const typeorm_2 = require("typeorm");
const leads_service_1 = require("../leads/leads/leads.service");
const notes_service_1 = require("../notes/notes/notes.service");
const user_login_service_1 = require("../user/user_login/user_login.service");
let ReportsService = class ReportsService {
    constructor(repo, leadService, userLoginService, noteService) {
        this.repo = repo;
        this.leadService = leadService;
        this.userLoginService = userLoginService;
        this.noteService = noteService;
    }
    async getMostGainLeadTraders() {
        return await this.repo.query('SELECT * FROM public."getBestSalerOperator"');
    }
    async getBestSalerOperator(brokerID, startDate, endDate) {
        if (startDate && endDate && !brokerID) {
            return await this.repo
                .query(`select Count(*) as count, "assigned_user", u.firstname as operator_firstname, 
u.lastname as operator_lastname
from leads
LEFT JOIN public."user" u ON u.id = leads."assigned_user" 
where assigned_user is not null 
AND leads."created_at" BETWEEN '${startDate}'::timestamp
AND '${endDate}'::timestamp
group by "assigned_user", u.firstname , u.lastname
order by count desc 
LIMIT 1
`);
        }
        if (startDate && endDate && brokerID) {
            console.log('burda');
            return await this.repo
                .query(`select Count(*) as count, "assigned_user", u.firstname as operator_firstname, 
u.lastname as operator_lastname
from leads
LEFT JOIN public."user" u ON u.id = leads."assigned_user" 
where assigned_user is not null 
AND leads."created_at" BETWEEN '${startDate}'::timestamp
AND '${endDate}'::timestamp
AND assigned_broker='${brokerID}'::uuid
group by "assigned_user", u.firstname , u.lastname
order by count desc 
LIMIT 1
`);
        }
        if (startDate && brokerID && !endDate) {
            return await this.repo
                .query(`select Count(*) as count, "assigned_user", u.firstname as operator_firstname, 
u.lastname as operator_lastname
from leads
LEFT JOIN public."user" u ON u.id = leads."assigned_user" 
where assigned_user is not null 
AND "leads".created_at BETWEEN '${startDate}'::timestamp
AND now()::timestamp
AND assigned_broker='${brokerID}'::uuid
group by "assigned_user", u.firstname , u.lastname
order by count desc 
LIMIT 1
`);
        }
        if (brokerID && !startDate && !endDate) {
            return await this.repo
                .query(`select Count(*) as count, "assigned_user", u.firstname as operator_firstname, 
u.lastname as operator_lastname
from leads
LEFT JOIN public."user" u ON u.id = leads."assigned_user" 
where assigned_user is not null 
AND assigned_broker='${brokerID}'::uuid
group by "assigned_user", u.firstname , u.lastname
order by count desc 
LIMIT 1
`);
        }
        console.log('servis', brokerID);
        return await this.repo
            .query(`select Count(*) as count, "assigned_user", u.firstname as operator_firstname, 
u.lastname as operator_lastname
from leads
LEFT JOIN public."user" u ON u.id = leads."assigned_user" 
where assigned_user is not null 
AND assigned_broker='${brokerID}'::uuid
group by "assigned_user", u.firstname , u.lastname
order by count desc 
LIMIT 1
`);
    }
    async getUserLoginByID(id) {
        return await this.userLoginService.getByUserId(id);
    }
    async getCounts(startDate, endDate, brokerID) {
        if (startDate && endDate && brokerID) {
            const fullTraderCountByOperator = await this.repo
                .query(`select Count(*) as count, "assigned_user" as operator_id, u.firstname as operator_firstname, 
u.lastname as operator_lastname
from leads
LEFT JOIN public."user" u ON u.id = leads."assigned_user" 
where assigned_user is not null 
AND "leads".created_at BETWEEN '${startDate}'::timestamp
AND '${endDate}'::timestamp
AND assigned_user='${brokerID}'::uuid
group by "assigned_user", u.firstname , u.lastname
order by count desc `);
            console.log('first');
            const traderCount = await this.repo.query(`SELECT Count(*) as tradercount from public."user" where "isTrader" = true AND created_at BETWEEN '${startDate}'::timestamp
AND '${endDate}'::timestamp  AND current_broker_id='${brokerID}'::uuid`);
            const operatorCount = await this.repo.query(`SELECT Count(*) as operatorCount from public."user"  where "isTrader" = true AND created_at BETWEEN '${startDate}'::timestamp
AND '${endDate}'::timestamp  AND current_broker_id='${brokerID}'::uuid`);
            return {
                operatorCount,
                traderCount,
                fullTraderCountByOperator,
            };
        }
        if (startDate && !endDate && brokerID) {
            console.log('bitiş tarihi yok');
            const fullTraderCountByOperator = await this.repo
                .query(`select Count(*) as count, "assigned_user" as operator_id, u.firstname as operator_firstname, 
u.lastname as operator_lastname
from leads
LEFT JOIN public."user" u ON u.id = leads."assigned_user" 
where assigned_user is not null 
AND "leads".created_at='${startDate}'::timestamp

AND assigned_broker='${brokerID}'::uuid
group by "assigned_user", u.firstname , u.lastname
order by count desc `);
            const traderCount = await this.repo.query(`SELECT Count(*) as tradercount from public."user" where "isTrader" = true AND created_at BETWEEN '${startDate}'::timestamp
AND now()::timestamp AND current_broker_id='${brokerID}'::uuid`);
            const operatorCount = await this.repo.query(`SELECT Count(*) as operatorCount from public."user"  where "isTrader" = true 
        AND created_at BETWEEN '${startDate}'::timestamp
AND now()::timestamp AND current_broker_id='${brokerID}'::uuid`);
            return {
                operatorCount,
                traderCount,
                fullTraderCountByOperator,
            };
        }
        if (!startDate && !endDate && brokerID) {
            console.log('tarih yok');
            const fullTraderCountByOperator = await this.repo
                .query(`select Count(*) as count, "assigned_user" as operator_id, u.firstname as operator_firstname, 
u.lastname as operator_lastname
from leads
LEFT JOIN public."user" u ON u.id = leads."assigned_user" 
where assigned_user is not null 

AND assigned_broker='${brokerID}'::uuid
group by "assigned_user", u.firstname , u.lastname
order by count desc `);
            const traderCount = await this.repo.query(`SELECT Count(*) as tradercount from public."user" where "isTrader" = true AND current_broker_id='${brokerID}'::uuid`);
            const operatorCount = await this.repo.query(`SELECT Count(*) as operatorCount from public."user"  where "isTrader" = true AND current_broker_id='${brokerID}'::uuid`);
            return {
                operatorCount,
                traderCount,
                fullTraderCountByOperator,
            };
        }
    }
    getPNL() {
        const data = {
            price: 24.895,
            priceType: 'USD',
            difference: -10.4,
            differenceConst: -3000,
            month: 'Ekim',
            prevPrice: 27.556,
        };
        return data;
    }
    getMockForTimeSeries() {
        const data = {
            timeSeries: {
                totalCustomer: 433,
                totalIncome: '$78,346',
                timeSeries: {
                    times: [2016, 2017, 2018, 2019],
                    data: [
                        {
                            name: 'Müşteriler',
                            data: [343, 345, 235, 656],
                        },
                    ],
                },
            },
        };
        return data;
    }
    async getTraderByLocation(country, city, brokerID) {
        if (country && city && brokerID) {
            return await this.repo
                .query(`SELECT * from public."getTraderByLocation" where city=${city} and country=${country} and current_broker_id='${brokerID}'
`);
        }
        if (!country && city && brokerID) {
            return await this.repo
                .query(`SELECT * from public."getTraderByLocation" where city=${city} and current_broker_id='${brokerID}'
`);
        }
        if (country && !city && brokerID) {
            return await this.repo
                .query(`SELECT * from public."getTraderByLocation" where country=${country} and current_broker_id='${brokerID}'
`);
        }
        if (country && city && !brokerID) {
            return await this.repo
                .query(`SELECT * from public."getTraderByLocation" where city=${city} and country=${country} 
`);
        }
        if (!country && !city && !brokerID) {
            return await this.repo.query(`SELECT * from public."getTraderByLocation"
`);
        }
        if (!country && !city && brokerID) {
            return await this.repo
                .query(`SELECT * from public."getTraderByLocation" where current_broker_id='${brokerID}'
`);
        }
    }
    async getLeadByCampaign(brokerID) {
        return await this.repo
            .query(`select leads."id" as lead_id,source_id as campaign_id, firstname, lastname, a.id as fk_campaign,
a.name as campaign_name, a.broker_id as campaign_broker  from leads 
INNER JOIN ad_campaigns a ON a.id = source_id
where leads."broker_id" = '${brokerID}'::uuid`);
    }
    async getBestSalerOperatorWithoutDate(brokerID) {
        if (brokerID) {
            return await this.repo
                .query(`select Count(*) as count, "assigned_user", u.firstname as operator_firstname, 
u.lastname as operator_lastname
from leads
LEFT JOIN public."user" u ON u.id = leads."assigned_user" 
where assigned_user is not null 
AND assigned_broker='${brokerID}'::uuid
group by "assigned_user", u.firstname , u.lastname
order by count desc 
LIMIT 1
`);
        }
        return await this.repo
            .query(`select Count(*) as count, "assigned_user", u.firstname as operator_firstname, 
u.lastname as operator_lastname
from leads
LEFT JOIN public."user" u ON u.id = leads."assigned_user" 
where assigned_user is not null 

group by "assigned_user", u.firstname , u.lastname
order by count desc 
LIMIT 1
`);
    }
    async getCountsWithoutDate(brokerID) {
        if (brokerID) {
            console.log('tarih yok');
            const traderCount = await this.repo.query(`SELECT Count(*) as tradercount from public."user" where "isTrader" = true AND current_broker_id='${brokerID}'::uuid`);
            const operatorCount = await this.repo.query(`SELECT Count(*) as operatorCount from public."user"  where "isTrader" = true AND current_broker_id='${brokerID}'::uuid`);
            return [...traderCount, ...operatorCount];
        }
        const fullTraderCountByOperator = await this.repo
            .query(`select Count(*) as count, "assigned_user" as operator_id, u.firstname as operator_firstname, 
u.lastname as operator_lastname
from leads
LEFT JOIN public."user" u ON u.id = leads."assigned_user" 
where assigned_user is not null 
AND "leads".created_at BETWEEN '2020-05-05 00:00:00'::timestamp
AND now()::timestamp

group by "assigned_user", u.firstname , u.lastname
order by count desc `);
        const traderCount = await this.repo.query(`SELECT Count(*) as tradercount from public."user" where "isTrader" = true`);
        const operatorCount = await this.repo.query(`SELECT Count(*) as operatorCount from public."user"  where "isTrader" = true`);
        return {
            operatorCount,
            traderCount,
            fullTraderCountByOperator,
        };
    }
    async getTraderCountByOperator(brokerID) {
        if (!brokerID) {
            return await this.repo
                .query(`select Count(*) as count, "assigned_user" as operator_id, u.firstname as operator_firstname, 
u.lastname as operator_lastname
from leads
LEFT JOIN public."user" u ON u.id = leads."assigned_user" 
where assigned_user is not null 
AND "leads".created_at BETWEEN '2020-05-05 00:00:00'::timestamp
AND now()::timestamp

group by "assigned_user", u.firstname , u.lastname
order by count desc `);
        }
        return await this.repo
            .query(`select Count(*) as count, "assigned_user" as operator_id, u.firstname as operator_firstname, 
u.lastname as operator_lastname
from leads
LEFT JOIN public."user" u ON u.id = leads."assigned_user" 
where assigned_user is not null 
AND "leads".created_at BETWEEN '2020-05-05 00:00:00'::timestamp
AND now()::timestamp
AND assigned_broker='${brokerID}'::uuid
group by "assigned_user", u.firstname , u.lastname
order by count desc `);
    }
    async getCountOperatedLeads(assignedID, startDate, endDate) {
        if (startDate && endDate && assignedID) {
            return await this.repo
                .query(`select Count(*) as count, "assigned_user" as operator_id, u.firstname as operator_firstname, 
u.lastname as operator_lastname
from leads
INNER JOIN public."user" u ON u.id = leads."assigned_user"
INNER JOIN public."notes" n ON n.author_id = leads."assigned_user"
where assigned_user is not null
AND "assigned_user"='${assignedID}'
AND "leads".created_at BETWEEN '${startDate}'::timestamp
AND '${endDate}'::timestamp
group by "assigned_user", u.firstname , u.lastname
order by count desc 
`);
        }
        if (startDate && !endDate && assignedID) {
            return await this.repo
                .query(`select Count(*) as count, "assigned_user" as operator_id, u.firstname as operator_firstname, 
u.lastname as operator_lastname
from leads
INNER JOIN public."user" u ON u.id = leads."assigned_user"
INNER JOIN public."notes" n ON n.author_id = leads."assigned_user"
where assigned_user is not null
AND "assigned_user"='${assignedID}'
AND "leads".created_at='${startDate}'::timestamp

group by "assigned_user", u.firstname , u.lastname
order by count desc 
`);
        }
        if (!startDate && !endDate && assignedID) {
            return await this.repo
                .query(`select Count(*) as count, "assigned_user" as operator_id, u.firstname as operator_firstname, 
u.lastname as operator_lastname
from leads
INNER JOIN public."user" u ON u.id = leads."assigned_user"
INNER JOIN public."notes" n ON n.author_id = leads."assigned_user"
where assigned_user is not null
AND "assigned_user"='${assignedID}'
group by "assigned_user", u.firstname , u.lastname
order by count desc 
`);
        }
    }
    async getLastNotesByLeadAndOperator(operatorID) {
        return await this.noteService.getByLeadAndOperator(operatorID);
    }
    async getTeamsByBroker(brokerID) {
        if (brokerID) {
            return await this.repo
                .query(`SELECT *, t.id as team_id,t.name as team_name, r.name as role_name, r.description as role_description,
u.id as user_id, u.firstname as user_firstname, u.lastname as user_lastname 
from team_user
INNER JOIN teams t ON t.id = team_user.team_id
INNER JOIN roles_description r ON r.role_id = team_user.role_id
INNER JOIN public."user" u ON u.id = team_user.user_id
where broker_id='${brokerID}'`);
        }
        return await this.repo
            .query(`SELECT *, t.id as team_id,t.name as team_name, r.name as role_name, r.description as role_description,
u.id as user_id, u.firstname as user_firstname, u.lastname as user_lastname 
from team_user
INNER JOIN teams t ON t.id = team_user.team_id
INNER JOIN roles_description r ON r.role_id = team_user.role_id
INNER JOIN public."user" u ON u.id = team_user.user_id
`);
    }
};
ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(leads_entity_1.Leads)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        leads_service_1.LeadsService,
        user_login_service_1.UserLoginService,
        notes_service_1.NotesService])
], ReportsService);
exports.ReportsService = ReportsService;
//# sourceMappingURL=reports.service.js.map