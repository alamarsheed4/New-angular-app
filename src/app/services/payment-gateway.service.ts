
export abstract class PaymentGateway {
    abstract pay(mobileName: string): string;
}