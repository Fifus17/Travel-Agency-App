import { Component } from '@angular/core';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.css']
})
export class HistoryCardComponent {
  title:string = "Hawaii";
  avgReview:number = 3.7;
  currentPrice:number = 2700;
  currency:string = "$";
  dayOut:string = "07/09/2022"
  dayIn:string = "14/09/2022"
  image:string = "https://content.api.news/v3/images/bin/ded3be00f6965dcfa60d91c42563592d?width=1044";
}
