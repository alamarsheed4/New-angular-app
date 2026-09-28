import { Injectable } from "@angular/core";
import { PaymentGateway } from "./payment-gateway.service";

@Injectable()
export class creditCardPayment extends PaymentGateway{
       pay(mobileName: string): string{
            return `${mobileName} Payment through credit card done!!`
       }
}