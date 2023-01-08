import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

  @Input('data') data:any = [];
  @Input('index') index:number = -1;

  constructor() { }

  ngOnInit() {
  }

}
