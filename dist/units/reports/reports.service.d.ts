import { Leads } from 'src/models/leads/leads.entity';
import { Repository } from 'typeorm';
import { LeadsService } from '../leads/leads/leads.service';
import { NotesService } from '../notes/notes/notes.service';
import { UserLoginService } from '../user/user_login/user_login.service';
export declare class ReportsService {
    private readonly repo;
    private readonly leadService;
    private readonly userLoginService;
    private readonly noteService;
    constructor(repo: Repository<Leads>, leadService: LeadsService, userLoginService: UserLoginService, noteService: NotesService);
    getMostGainLeadTraders(): Promise<any>;
    getBestSalerOperator(brokerID?: string, startDate?: string, endDate?: string): Promise<any>;
    getUserLoginByID(id: string): Promise<any>;
    getCounts(startDate?: string, endDate?: string, brokerID?: string): Promise<any>;
    getPNL(): {
        price: number;
        priceType: string;
        difference: number;
        differenceConst: number;
        month: string;
        prevPrice: number;
    };
    getMockForTimeSeries(): {
        timeSeries: {
            totalCustomer: number;
            totalIncome: string;
            timeSeries: {
                times: number[];
                data: {
                    name: string;
                    data: number[];
                }[];
            };
        };
    };
    getTraderByLocation(country?: number, city?: number, brokerID?: string): Promise<any>;
    getLeadByCampaign(brokerID: string): Promise<any>;
    getBestSalerOperatorWithoutDate(brokerID?: string): Promise<any>;
    getCountsWithoutDate(brokerID?: string): Promise<any>;
    getTraderCountByOperator(brokerID?: string): Promise<any>;
    getCountOperatedLeads(assignedID?: string, startDate?: string, endDate?: string): Promise<any>;
    getLastNotesByLeadAndOperator(operatorID: string): Promise<import("../notes/notes/notes.dto").NotesDTO[]>;
    getTeamsByBroker(brokerID?: string): Promise<any>;
}
