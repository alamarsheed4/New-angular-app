import { inject, Injectable, signal } from "@angular/core";
import { loggerService } from "./logger.service";
import { Api_URL } from "../tokens/app.token";
 
@Injectable({           //Injectable creates instance for services implicitly, No need to create instance for your services
    providedIn: 'root'
})  
  export class MobileServices{

    private loggerService = inject(loggerService);

    private apiURL = inject(Api_URL)

    selectedMobileName = signal('No mobile selected')
    
    // loggerService = new LoggerService(); 
     constructor(private LoggerService : loggerService){

 }

  getMobiles() {
    
  this.loggerService.log(`Mobile data requested from the web APi URL ${this.apiURL}`)
    
    return [
      {
        id: 1,
        brand: 'Samsung',
        model: 'Galaxy S26',
        price: 85000
      },
      {
        id: 2,
        brand: 'Apple',
        model: 'iPhone 18',
        price: 95000
      },
      {
        id: 3,
        brand: 'OnePlus',
        model: 'OnePlus 16',
        price: 60000
      },   
    ];
  }

   getWelcomeMessage(){
    return 'WELCOME TO INNOVATIVE MOBILE STORE'
  }

  selectMobile(brand: string, model:string){
  //  var filteredData= this.getMobiles().filter(x=> {
  //     return x.brand == brand && x.model == model}
  //   );
  //   return filteredData;

  this.selectedMobileName.set(`${brand} ${model}`)
  this.loggerService.log(`${brand} ${model} was selected from mobile List Component.`)
  
  //var text = "hello";
}
}

