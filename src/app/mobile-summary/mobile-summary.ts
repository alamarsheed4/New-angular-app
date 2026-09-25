import { Component, inject } from '@angular/core';
import { MobileServices } from '../services/mobile-service';

@Component({
  imports: [],
  selector: 'app-mobile-summary',
  styleUrl: './mobile-summary.css',
  templateUrl: './mobile-summary.html',
})
export class MobileSummary {

  /* 
    This component injects the same root-level
    MobileService instance used by MobileListComponent
  */
  mobileService = inject(MobileServices); 

  
}
