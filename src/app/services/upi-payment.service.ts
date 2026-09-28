import { Injectable } from "@angular/core";
import { PaymentGateway } from "./payment-gateway.service";

@Injectable()
export class UPIPayment extends PaymentGateway{
     pay(mobileName: string): string {
        return `${mobileName} Payment through Phone pay done!!`
    }
}