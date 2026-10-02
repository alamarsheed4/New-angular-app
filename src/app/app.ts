import { Component, Directive, HostBinding, HostListener} from '@angular/core';
@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  //host: {
    // '[style.color]': 'fontColor',
    // '[style.font-weight]': 'fweight',
    // '[style.background-color]': 'bColor',
    // '[style.display]': 'display',
    // '[style.font-size]': 'fontSize',
    // '(mouseenter)':'onmouseEnter()',
    // '(mouseleave)':'onmouseLeave()',
    // '(click)':'onmouseClick()'

 //}
  
})
export class App {

  //  fontColor = 'red';

  //  fweight = 'bolder'

  //  bColor = "black"

  //  display = 'block'

  //  fontSize = '45px'

  @HostBinding('style.color')
  fontColor = 'blue';

  @HostBinding('style.font-weight')
  fweight = 'bolder';

  @HostBinding('style.background-color')
  bColor = 'green';

  @HostBinding('style.display')
  display = 'block';

  @HostBinding('style.font-size')
  fontSize = '50px';

  @HostListener('mouseenter')
  onmouseEnter() {
    this.fontColor = 'rgb(18, 156, 206)';
    this.bColor = 'rgb(206, 122, 5)';
    this.fweight = 'bolder';
    this.fontSize = '60px';
  }

  @HostListener('mouseleave')
  onmouseLeave() {
    this.fontColor = 'rgb(157, 16, 222)';
    this.bColor = 'rgb(206, 193, 5)';
    this.fweight = '600';
    this.fontSize = '30px';
  }

  @HostListener('click')
  onmouseClick() {
    this.fontColor = 'rgba(61, 222, 16, 1)';
    this.bColor = 'rgba(5, 132, 206, 1)';
    this.fweight = '700';
    this.fontSize = '70px';
  }
  
}