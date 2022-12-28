import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.css']
})
export class HistoryCardComponent {
  @Input('data') data: any = [];
  year: number = new Date().getFullYear();
  month: number = new Date().getMonth() + 1;
  day: number = new Date().getDate();
  constructor() {  }

  getStatus(): number {
    if(parseInt(this.data.dayOut.slice(0,4)) > this.year) 
    {
      if(parseInt(this.data.dayIn.slice(0, 4)) == this.year && parseInt(this.data.dayIn.slice(5, 7)) <= this.month && parseInt(this.data.dayIn.slice(8, 10)) <= this.month) return 1;
      else return 2;
    }
    if(parseInt(this.data.dayOut.slice(0,4)) < this.year) return 0;
    else {
      if(parseInt(this.data.dayIn.slice(5, 7)) <= this.month && parseInt(this.data.dayIn.slice(8, 10)) <= this.month) return 1;
      if(parseInt(this.data.dayOut.slice(5,7)) > this.month) return 2;
      else if(parseInt(this.data.dayOut.slice(5,7)) < this.month) return 0;
      else {
        if(parseInt(this.data.dayOut.slice(8,10)) > this.day) return 2;
        else if(parseInt(this.data.dayOut.slice(8,10)) < this.day) return 0;
        else return 1;
      }
    }
  }
}
