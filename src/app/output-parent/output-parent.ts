import { Component } from '@angular/core';
import { OutputChild } from './output-child/output-child';

@Component({
  imports: [OutputChild],
  selector: 'app-output-parent',
  styleUrl: './output-parent.css',
  templateUrl: './output-parent.html',
})
export class OutputParent {


   receivedTraditionalMessage:string = "No Message Received From Friend!!"
  receiveTraditionalOutput(message:any){
    // console.log(message);
   // console.log(this.receivedTraditionalMessage);
    this.receivedTraditionalMessage = message
    
  }
  receiveModernOutput(message:any){
    this.receivedTraditionalMessage = message
  }

}
