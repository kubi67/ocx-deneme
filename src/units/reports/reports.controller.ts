import { Controller, Get, Param, Query, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TransformInterceptor } from 'src/libs/api-results/standart-results';
import { ReportsService } from './reports.service';

@Controller('dash-reports')
@ApiTags('Dash Reports Endpoints')
@UseInterceptors(TransformInterceptor)
export class ReportsController {
  constructor(private readonly reportService: ReportsService) {}

  @Get('/get/:brokerID?/:startDate?/:endDate?')
  public async getReports(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('brokerID') brokerID?: string,
  ): Promise<any> {
    if (!brokerID && !startDate && !endDate) {
      return {
        MVPTrader: await this.reportService.getBestSalerOperatorWithoutDate(),
        BestSalerOperator:
          await this.reportService.getBestSalerOperatorWithoutDate(),
        Summaries: await this.reportService.getCountsWithoutDate(),
        PNL: await this.reportService.getPNL(),
        WidgetDatas: await this.reportService.getMockForTimeSeries(),
        TraderCountByOperator:
          await this.reportService.getTraderCountByOperator(brokerID),
      };
    }
    if (brokerID && !startDate && !endDate) {
      return {
        MVPTrader: await this.reportService.getBestSalerOperatorWithoutDate(
          brokerID,
        ),
        BestSalerOperator:
          await this.reportService.getBestSalerOperatorWithoutDate(brokerID),
        Summaries: await this.reportService.getCountsWithoutDate(brokerID),
        TraderCountByOperator:
          await this.reportService.getTraderCountByOperator(brokerID),
        PNL: await this.reportService.getPNL(),
        WidgetDatas: await this.reportService.getMockForTimeSeries(),
      };
    }
    return {
      MVPTrader: await this.reportService.getMostGainLeadTraders(),
      BestSalerOperator: await this.reportService.getBestSalerOperator(
        startDate,
        endDate,
        brokerID,
      ),
      Summaries: await this.reportService.getCounts(
        startDate,
        endDate,
        brokerID,
      ),
      TraderCountByOperator: await this.reportService.getTraderCountByOperator(
        brokerID,
      ),
      PNL: await this.reportService.getPNL(),
      WidgetDatas: await this.reportService.getMockForTimeSeries(),
    };
  }

  @Get('/best-saler/:brokerID?/:startDate?/:endDate?')
  public async getBestSaler(
    @Query('brokerID') brokerID: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    console.log(brokerID);
    if (brokerID && startDate && endDate) {
      return await this.reportService.getBestSalerOperator(
        startDate,
        endDate,
        brokerID,
      );
    }

    if (brokerID && !startDate && !endDate) {
      return await this.reportService.getBestSalerOperator(brokerID);
    }

    if (brokerID && startDate && !endDate) {
      return await this.reportService.getBestSalerOperator(
        startDate,

        brokerID,
      );
    }

    if (!brokerID && !startDate && !endDate) {
      return await this.reportService.getBestSalerOperator();
    }

    return await this.reportService.getBestSalerOperator(brokerID);
  }

  @Get('/leads-by-campaign/:brokerID?')
  public async getLeadsByCampaign(@Query('brokerID') brokerID?: string) {
    return await this.reportService.getLeadByCampaign(brokerID);
  }

  @Get('/get-operated/:assignedID?/:startDate?/:endDate?')
  public async getOperated(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('assignedID') assignedID?: string,
  ): Promise<any> {
    if (assignedID && !startDate && !endDate) {
      return {
        Operated: await this.reportService.getCountOperatedLeads(assignedID),
        Counts: await this.reportService.getCounts(
          startDate,
          endDate,
          assignedID,
        ),
        LastNote: await this.reportService.getLastNotesByLeadAndOperator(
          assignedID,
        ),
        PNL: await this.reportService.getPNL(),
        WidgetDatas: await this.reportService.getMockForTimeSeries(),
      };
    }
    if (assignedID && startDate && !endDate) {
      return {
        Operated: await this.reportService.getCountOperatedLeads(
          assignedID,
          startDate,
        ),
        Counts: await this.reportService.getCounts(
          startDate,
          endDate,
          assignedID,
        ),
        LastNote: await this.reportService.getLastNotesByLeadAndOperator(
          assignedID,
        ),
        PNL: await this.reportService.getPNL(),
        WidgetDatas: await this.reportService.getMockForTimeSeries(),
      };
    }
    return {
      Operated: await this.reportService.getCountOperatedLeads(
        assignedID,
        startDate,
        endDate,
      ),
      Counts: await this.reportService.getCounts(
        startDate,
        endDate,
        assignedID,
      ),
      LastNote: await this.reportService.getLastNotesByLeadAndOperator(
        assignedID,
      ),
      PNL: await this.reportService.getPNL(),
      WidgetDatas: await this.reportService.getMockForTimeSeries(),
    };
  }

  @Get('/trader/trader-by-location/:brokerID?/:county?/:city?')
  public async getTraderByLocation(
    @Query('brokerID') brokerID?: string,
    @Query('city') city?: number,
    @Query('country') country?: number,
  ) {
    if (brokerID && country && city) {
      return await this.reportService.getTraderByLocation(
        country,
        city,
        brokerID,
      );
    }

    if (brokerID && !country && city) {
      return await this.reportService.getTraderByLocation(
        country,
        city,
        brokerID,
      );
    }

    if (brokerID && country && !city) {
      return await this.reportService.getTraderByLocation(
        country,
        city,
        brokerID,
      );
    }

    if (brokerID && !country && !city) {
      return await this.reportService.getTraderByLocation(
        country,
        city,
        brokerID,
      );
    }

    return await this.reportService.getTraderByLocation();
  }

  @Get('/get-teams/:brokerID?')
  public async getTeams(@Query('brokerID') brokerID?: string) {
    if (brokerID) {
      return await this.reportService.getTeamsByBroker(brokerID);
    }

    return await this.reportService.getTeamsByBroker();
  }
}
