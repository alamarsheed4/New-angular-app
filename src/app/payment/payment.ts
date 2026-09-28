import { Component, inject,signal } from '@angular/core';
import { MobileServices } from '../services/mobile-service';
import { PaymentGateway } from '../services/payment-gateway.service';

@Component({
  imports: [],
  selector: 'app-payment',
  styleUrl: './payment.css',
  templateUrl: './payment.html',
})
export class PaymentComponent {

  mobileService = inject(MobileServices);
  PaymentGatewayService = inject(PaymentGateway) // new creditCard()

  paymentMessage = signal('Select a mobile before making payment');
  
  makePayment(){
    const selectedMobile = this.mobileService.selectedMobileName();
  if(selectedMobile == "No mobile selected")
    {
    this.paymentMessage.set('Kindly Select a mobile first');
    return;
  }

  const result = this.PaymentGatewayService.pay(selectedMobile)
  
  this.paymentMessage.set(result);
  
  //console.log(selectedMobile)
  }
}
