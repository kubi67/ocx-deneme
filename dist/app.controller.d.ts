import { AppService } from './app.service';
import { SendMailService } from './scripts/mailer-scripts/mailer.service';
import { UsersService } from './units/user/user/user.service';
export declare class AppController {
    private readonly appService;
    private readonly mailService;
    private readonly userService;
    constructor(appService: AppService, mailService: SendMailService, userService: UsersService);
    root(id: string): Promise<any>;
    sendMail(): Promise<string>;
    testGuard(user: any): Promise<string>;
}
