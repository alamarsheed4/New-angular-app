import { inject, Injectable } from "@angular/core";
import { NotificationService } from "./notification-service";
import { loggerService } from "../logger.service";
import { NotificationLogService } from "./notification-log";

@Injectable()
export class EmailNotificationService implements NotificationService{

    private logService = inject(loggerService);

    private notificationlogService = inject(NotificationLogService)

    send(Message: string): void {

        const newMassage = `✉️ Email Sent : ${Message}`
        this.logService.log(`✉️ Email Sent : Message`);
        this.notificationlogService.addNotification(newMassage);


    }
}