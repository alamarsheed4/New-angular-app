import { Component} from '@angular/core';
import { EncapsulationA } from './encapsulation-a/encapsulation-a';
import { EncapsulationB } from './encapsulation-b/encapsulation-b';
@Component({
  imports: [EncapsulationA, EncapsulationB],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

 
}