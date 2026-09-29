import { Component} from '@angular/core';
@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  host: {
    '[style.color]': 'fontColor',
    '[style.font-weight]': 'fweight',
    '[style.background-color]': 'bColor',
    '[style.display]': 'display',
    '[style.font-size]': 'fontSize',
    '(mouseenter)':'onmouseEnter()',
    '(mouseleave)':'onmouseLeave()',
    '(click)':'onmouseClick()'

  }
})
export class App {

  fontColor = 'blue'
  fweight = 'bold'
  bColor = 'green'
  display = 'block'
  fontSize = '20px'

  onmouseEnter(){
    this.fontColor = 'rgb(18, 156, 206)'
    this.bColor = 'rgb(206, 122, 5)'
    this.fweight= 'bolder'
    this.fontSize= '60px'
  }

  onmouseLeave(){
    this.fontColor = 'rgb(157, 16, 222)'
    this.bColor = 'rgb(206, 193, 5)'
    this.fweight= 'bolder'
    this.fontSize= '30px'
  }

  onmouseClick(){
     this.fontColor = 'rgba(61, 222, 16, 1)'
    this.bColor = 'rgba(5, 132, 206, 1)'
    this.fweight= 'bolder'
    this.fontSize= '70px'
  }

  
}