

// Injected

import { Injectable, signal } from "@angular/core";
@Injectable()
export class MobilePreviewService{

    previewMessage = signal('No mobile selected for preview!!')


    selectPreview(brand: string, model:string){
  //  var filteredData= this.getMobiles().filter(x=> {
  //     return x.brand == brand && x.model == model}
  //   );
  //   return filteredData;

  this.previewMessage.set(`${brand} ${model}`)
  }

}
