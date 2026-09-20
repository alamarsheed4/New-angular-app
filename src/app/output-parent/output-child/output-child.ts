import { Component, EventEmitter, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-output-child',
  styleUrl: './output-child.css',
  templateUrl: './output-child.html',
})
export class OutputChild {

  traditionalMessageText = " Hii, How are you ??"

  @Output() traditionalEmployeeAction = new EventEmitter<string>()

  sendTraditionalMessage(){

    this.traditionalEmployeeAction.emit(this.traditionalMessageText)

  }

  ModernEmployeeAction = output<string>();

  sendModernMessage(){
    this.ModernEmployeeAction.emit(this.traditionalMessageText)
  }
}
