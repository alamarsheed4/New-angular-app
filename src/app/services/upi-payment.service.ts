import { inject, Injectable } from "@angular/core";
import { PaymentGateway } from "./payment-gateway.service";
import { NotificationService } from "./notifications/notification-service";

@Injectable()
export class UPIPayment extends PaymentGateway{

    notificationService = inject(NotificationService)

     pay(mobileName: string): string {
       
        this.notificationService.send(mobileName);
       
        return `${mobileName} Payment through Phone pay done!!`
    }
}