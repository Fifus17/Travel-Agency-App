import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-overall-review',
  templateUrl: './overall-review.component.html',
  styleUrls: ['./overall-review.component.css']
})
export class OverallReviewComponent {

  @Input('data') data: any = [];
  points: number[] = [0, 0, 0, 0, 0];
  maxOfPoints: number = 0;
  classes: string[] = ['0%', '0%', '0%', '0%', '0%'];
  mean: number = 0;

  ngOnInit() {
    for(let comment of this.data.reviews) {
      this.points[comment.points - 1]++;
      this.maxOfPoints = Math.max(this.maxOfPoints, this.points[comment.points - 1]);
    }

    this.classes = [
      (this.points[0] * 100 / this.maxOfPoints).toString() + '%',
      (this.points[1] * 100 / this.maxOfPoints).toString() + '%',
      (this.points[2] * 100 / this.maxOfPoints).toString() + '%',
      (this.points[3] * 100 / this.maxOfPoints).toString() + '%',
      (this.points[4] * 100 / this.maxOfPoints).toString() + '%'
    ];
    this.mean = (this.points[0] + 2 * this.points[1] + 3 * this.points[2] + 4 * this.points[3] + 5 * this.points[4]) / this.data.reviews.length;
  }

}
