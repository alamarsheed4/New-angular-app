import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-traditional-two-way-child',
  styleUrl: './traditional-two-way-child.css',
  templateUrl: './traditional-two-way-child.html',
})
export class TraditionalTwoWayChild {

  // @Input() childQuantity:number = 0;

  // @Output() childQuantityChange = new EventEmitter<number>();

  //using model we can also do that
  childQuantity = model(0)

  increaseQuantity(){
   // this.childQuantityChange.emit(this.childQuantity+1);

    this.childQuantity.update((element)=>element + 1)
  }

  decreaseQuantity(){

   // this.childQuantityChange.emit(this.childQuantity-1);

    this.childQuantity.update((element)=>element - 1)

  }


}
