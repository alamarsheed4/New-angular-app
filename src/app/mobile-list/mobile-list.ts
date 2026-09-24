import { Component, inject, OnInit } from '@angular/core';
import { MobileServices } from '../services/mobile-service';

@Component({
  imports: [],
  selector: 'app-mobile-list',
  styleUrl: './mobile-list.css',
  templateUrl: './mobile-list.html',
})
export class MobileList implements OnInit {


 mobileService = inject(MobileServices);  //inject will inject your services here after importing service file

 mobiles:any;

 wecomeMessage !:string

 ngOnInit(): void{        //ngOnInit will run your service automatically whenever it is needed

   this.mobiles = this.mobileService.getMobiles();
   this.wecomeMessage = this.mobileService.getWelcomeMessage();
 }
  
 // mobiles:any;

  // ngOnInit(): void {
  //  var mobileService = new MobileServices();
  //  this.mobiles = mobileService.getMobiles();

//}

}
