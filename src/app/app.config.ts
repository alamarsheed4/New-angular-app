import { ApplicationConfig } from '@angular/core';
import { App_Name, Api_URL } from './tokens/app.token';
import { PaymentGateway } from './services/payment-gateway.service';
import { creditCardPayment } from './services/creditcard-payment.service';
import { NotificationService } from './services/notifications/notification-service';
import { EmailNotificationService } from './services/notifications/email-notification-service';
import { UPIPayment } from './services/upi-payment.service';

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
      useClass: UPIPayment
    },
    {
      provide : NotificationService,
      useClass: EmailNotificationService
    },
  ]
};