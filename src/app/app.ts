import { Component, Directive, HostBinding, HostListener} from '@angular/core';
import { FirstDivDirective } from './first-div.directive';
@Component({
  imports: [FirstDivDirective],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  
})
export class App {

  
}