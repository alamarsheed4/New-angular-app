import { Component, inject, OnInit } from '@angular/core';
import { MobileServices } from '../services/mobile-service';
import { MobilePreview } from '../mobile-preview/mobile-preview';
import { MobilePreviewService } from '../services/mobile-preview.service';
import { loggerService } from '../services/logger.service';

@Component({
  imports: [MobilePreview],
  selector: 'app-mobile-list',
  styleUrl: './mobile-list.css',
  templateUrl: './mobile-list.html',
  providers: [MobilePreviewService]  //register at component level
})
export class MobileList implements OnInit {


 mobileService = inject(MobileServices);  //inject will inject your services here after importing service file

 //for capture service
 mobilePreviewService = inject(MobilePreviewService)

//  constructor(private LoggerService : loggerService){

//  }

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

    selectedMobile(brand:string, model:string){

      this.mobileService.selectMobile(brand, model);

      this.mobilePreviewService.selectPreview(brand, model);
     // this.LoggerService.log(`${brand} ${model} was selected from mobile List Component.`)
  
    }

}
