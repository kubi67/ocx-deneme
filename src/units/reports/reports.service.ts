import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Leads } from 'src/models/leads/leads.entity';
import { Repository } from 'typeorm';
import { LeadsService } from '../leads/leads/leads.service';
import { NotesService } from '../notes/notes/notes.service';
import { UserLoginService } from '../user/user_login/user_login.service';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Leads)
    private readonly repo: Repository<Leads>,
    private readonly leadService: LeadsService,
    private readonly userLoginService: UserLoginService,
    private readonly noteService: NotesService,
  ) {}

  // En çok müşteri/yatırımcı bağlayan trader - tarihsiz
  public async getMostGainLeadTraders(): Promise<any> {
    return await this.repo.query('SELECT * FROM public."getBestSalerOperator"');
  }

  // En çok müşteri/yatırımcı bağlayan trader tarihli
  public async getBestSalerOperator(
    startDate?: string,
    endDate?: string,
    brokerID?: string,
  ): Promise<any> {
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
  }

  public async getUserLoginByID(id: string): Promise<any> {
    return await this.userLoginService.getByUserId(id);
  }

  public async getCounts(
    startDate?: string,
    endDate?: string,
    brokerID?: string,
  ): Promise<any> {
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
      const traderCount = await this.repo.query(
        `SELECT Count(*) as tradercount from public."user" where "isTrader" = true AND created_at BETWEEN '${startDate}'::timestamp
AND '${endDate}'::timestamp  AND current_broker_id='${brokerID}'::uuid`,
      );
      const operatorCount = await this.repo.query(
        `SELECT Count(*) as operatorCount from public."user"  where "isTrader" = true AND created_at BETWEEN '${startDate}'::timestamp
AND '${endDate}'::timestamp  AND current_broker_id='${brokerID}'::uuid`,
      );
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
      const traderCount = await this.repo.query(
        `SELECT Count(*) as tradercount from public."user" where "isTrader" = true AND created_at BETWEEN '${startDate}'::timestamp
AND now()::timestamp AND current_broker_id='${brokerID}'::uuid`,
      );
      const operatorCount = await this.repo.query(
        `SELECT Count(*) as operatorCount from public."user"  where "isTrader" = true 
        AND created_at BETWEEN '${startDate}'::timestamp
AND now()::timestamp AND current_broker_id='${brokerID}'::uuid`,
      );
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
      const traderCount = await this.repo.query(
        `SELECT Count(*) as tradercount from public."user" where "isTrader" = true AND current_broker_id='${brokerID}'::uuid`,
      );
      const operatorCount = await this.repo.query(
        `SELECT Count(*) as operatorCount from public."user"  where "isTrader" = true AND current_broker_id='${brokerID}'::uuid`,
      );
      return {
        operatorCount,
        traderCount,
        fullTraderCountByOperator,
      };
    }
  }

  public getPNL() {
    const data = [
      {
        price: 24.895,
        priceType: 'USD',
        difference: -10.4, // yüzdelik karşılığı
        differenceConst: -3000, // sayısal karşılığı
        month: 'Ekim',
        prevPrice: 27.556,
      },
      {
        price: 26.795,
        priceType: 'USD',
        difference: -10.4, // yüzdelik karşılığı
        differenceConst: -2000, // sayısal karşılığı
        month: 'Ekim',
        prevPrice: 24.895,
      },
      {
        price: 19.195,
        priceType: 'USD',
        difference: -10.4, // yüzdelik karşılığı
        differenceConst: -5000, // sayısal karşılığı
        month: 'Ekim',
        prevPrice: 26.795,
      },
      {
        price: 19.195,
        priceType: 'USD',
        difference: -10.4, // yüzdelik karşılığı
        differenceConst: -3000, // sayısal karşılığı
        month: 'Ekim',
        prevPrice: 27.556,
      },
      {
        price: 4.895,
        priceType: 'USD',
        difference: -10.4, // yüzdelik karşılığı
        differenceConst: -3000, // sayısal karşılığı
        month: 'Ekim',
        prevPrice: 27.556,
      },
    ];
    return data;
  }

  public getMockForTimeSeries() {
    const data = [
      {
        timeSeries: {
          totalCustomer: 433,
          totalIncome: '$78,346',
          timeSeries: {
            times: [2016, 2017, 2018, 2019],
            data: [
              {
                name: 'Müşteriler',
                values: [343, 345, 235, 656],
              },
            ],
          },
        },
        cardWidget: {
          totalCustomer: 433,
          totalIncome: '$78,346',
          timeSeries: {
            times: [2016, 2017, 2018, 2019],
            data: [
              {
                name: 'Müşteriler',
                values: [343, 345, 235, 656],
              },
            ],
          },
        },
      },
    ];
    return data;
  }

  public async getTraderByLocation(
    country?: number,
    city?: number,
    brokerID?: string,
  ) {
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

  public async getLeadByCampaign(brokerID: string) {
    return await this.repo
      .query(`select leads."id" as lead_id,source_id as campaign_id, firstname, lastname, a.id as fk_campaign,
a.name as campaign_name, a.broker_id as campaign_broker  from leads 
INNER JOIN ad_campaigns a ON a.id = source_id
where leads."broker_id" = '${brokerID}'::uuid`);
  }

  // En çok müşteri/yatırımcı bağlayan trader tarihli
  public async getBestSalerOperatorWithoutDate(
    brokerID?: string,
  ): Promise<any> {
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

  public async getCountsWithoutDate(brokerID?: string): Promise<any> {
    if (brokerID) {
      console.log('tarih yok');
      const traderCount = await this.repo.query(
        `SELECT Count(*) as tradercount from public."user" where "isTrader" = true AND current_broker_id='${brokerID}'::uuid`,
      );
      const operatorCount = await this.repo.query(
        `SELECT Count(*) as operatorCount from public."user"  where "isTrader" = true AND current_broker_id='${brokerID}'::uuid`,
      );

      const fullTraderCountByOperator = await this.repo
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
      return {
        operatorCount,
        traderCount,
        fullTraderCountByOperator,
      };
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
    const traderCount = await this.repo.query(
      `SELECT Count(*) as tradercount from public."user" where "isTrader" = true`,
    );
    const operatorCount = await this.repo.query(
      `SELECT Count(*) as operatorCount from public."user"  where "isTrader" = true`,
    );
    return {
      operatorCount,
      traderCount,
      fullTraderCountByOperator,
    };
  }

  // kaç tane lead işlendi?
  public async getCountOperatedLeads(
    assignedID?: string,
    startDate?: string,
    endDate?: string,
  ): Promise<any> {
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

  public async getLastNotesByLeadAndOperator(operatorID: string) {
    return await this.noteService.getByLeadAndOperator(operatorID);
  }

  public async getTeamsByBroker(brokerID?: string) {
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
}
