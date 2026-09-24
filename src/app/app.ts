import { Component, inject, OnInit} from '@angular/core';
import { MobileServices } from './services/mobile-service';
@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',

})
export class App implements OnInit {

 mobileService = inject(MobileServices);  //inject will inject your services here after importing service file

 mobiles:any;

 ngOnInit(): void{        //ngOnInit will run your service automatically whenever it is needed

   this.mobiles = this.mobileService.getMobiles();
 }


  // mobiles:any;

  // ngOnInit(): void {
  //  var mobileService = new MobileServices();
  //  this.mobiles = mobileService.getMobiles();

//}


  getWelcomeMessage(){
    return 'WELCOME TO INNOVATIVE MOBILE STORE'
  }
}
