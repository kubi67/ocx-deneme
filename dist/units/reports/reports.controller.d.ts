import { ReportsService } from './reports.service';
export declare class ReportsController {
    private readonly reportService;
    constructor(reportService: ReportsService);
    getReports(startDate?: string, endDate?: string, brokerID?: string, city?: number, country?: number): Promise<any>;
    getLeadsByCampaign(brokerID?: string): Promise<any>;
    getOperated(startDate?: string, endDate?: string, assignedID?: string): Promise<any>;
    getTraderByLocation(brokerID?: string, city?: number, country?: number): Promise<any>;
    getTeams(brokerID?: string): Promise<any>;
}
