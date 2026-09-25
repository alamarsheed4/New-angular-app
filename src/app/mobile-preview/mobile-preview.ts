import { Component, inject } from '@angular/core';
import { MobilePreviewService } from '../services/mobile-preview.service';

@Component({
  imports: [],
  selector: 'app-mobile-preview',
  styleUrl: './mobile-preview.css',
  templateUrl: './mobile-preview.html',
})
export class MobilePreview {

  // instance is very important for me, because i need to get the signal from
  // service 
  //if i able to create the instance then i can get the members
  mobilePreviewService = inject(MobilePreviewService)


}
