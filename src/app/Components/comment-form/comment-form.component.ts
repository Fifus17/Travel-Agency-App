import { Component } from '@angular/core';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {

  grad:number = 0;
  flag:boolean = true;

  grade(num:number) {
    if (this.grad == num && !this.flag) {
      this.grad = 0;
      this.flag = true;
    }
    else {
      this.grad = num;
      this.flag = false;
    }
  }
  
}
