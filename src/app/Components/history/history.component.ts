import { Component } from '@angular/core';
import { HistoryService } from 'src/app/Services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {

  historyData: any = [];

  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
    this.historyData = this.historyService.getHistoryData();
  }
}
