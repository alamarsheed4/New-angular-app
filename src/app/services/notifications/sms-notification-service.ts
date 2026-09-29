import { inject, Injectable } from "@angular/core";
import { NotificationService } from "./notification-service";
import { loggerService } from "../logger.service";

@Injectable()
export class SmsNotificationService implements NotificationService{

    private logService = inject(loggerService);

    send(Message: string): void {
        this.logService.log(`💬 Sms Sent : Message`);
    }
}