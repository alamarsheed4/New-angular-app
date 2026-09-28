import { ApplicationConfig } from '@angular/core';
import { App_Name, Api_URL } from './tokens/app.token';
import { PaymentGateway } from './services/payment-gateway.service';
import { creditCardPayment } from './services/creditcard-payment.service';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide : App_Name,
      useValue: 'Innovative Mobile Store'
    },
    {
      provide : Api_URL,
      useValue: 'https://www.misard.com/user/dashboard'
    },
    {
      provide : PaymentGateway,
      useClass: creditCardPayment
    },
  ]
};