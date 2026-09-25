import { Component} from '@angular/core';
import { MobileList } from './mobile-list/mobile-list';
import { MobileSummary } from './mobile-summary/mobile-summary';
@Component({
  imports: [MobileList, MobileSummary],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',

})
export class App {

}
