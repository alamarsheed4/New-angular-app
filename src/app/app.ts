import { Component, inject} from '@angular/core';
import { MobileList } from './mobile-list/mobile-list';
import { MobileSummary } from './mobile-summary/mobile-summary';
import { App_Name } from './tokens/app.token';
import { PaymentComponent } from './payment/payment';
import {NotificationComponent } from './notification/notification';
@Component({
  imports: [MobileList, MobileSummary,PaymentComponent,NotificationComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',

})
export class App {

  appName = inject(App_Name)
}
