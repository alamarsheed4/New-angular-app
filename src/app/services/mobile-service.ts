import { Injectable, signal } from "@angular/core";
 
@Injectable({           //Injectable creates instance for services implicitly, No need to create instance for your services
    providedIn: 'root'
})  
  export class MobileServices{

    selectedMobileName = signal('No mobile selected')
    
  getMobiles() {
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
  }
}

