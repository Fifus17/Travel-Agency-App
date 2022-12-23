import { Component } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent {
  title = 'My first AGM project';
  lat:number = 51.678418;
  lng:number = 7.809007;
}
