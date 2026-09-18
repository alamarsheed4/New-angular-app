import { Component, Input, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-input-child',
  styleUrl: './input-child.css',
  templateUrl: './input-child.html',
})
export class InputChild {

  //using Decorator
  // @Input(
  //   {
  //   required:true,
  //   alias: 'tradEmployeeName'
  //   }
  // ) traditionalEmployeeName !: string

  // @Input() traditionalEmployeeRole !: string

  //using input signal
  
  traditionalEmployeeName=input("Guest",{
    alias: 'tradEmployeeName',
    transform: ((value:string)=>value.trim().toUpperCase())
  });
  
  
  traditionalEmployeeRole=input<string>()

}
