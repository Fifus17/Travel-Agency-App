import { Component, Input } from '@angular/core';
import { Trip } from 'src/app/Interfaces/ITrip';
import { DatabaseConnectionService } from 'src/app/Services/database-connection.service';
import { FormsModule } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent {
  @Input('data') trip: Trip | undefined;
  grad: number = -1;
  flag: boolean = true;
  reviewTextInput: string = '';
  uid: string = '';
  // userNameInputText: string = '';
    constructor(public db: DatabaseConnectionService, afauth: AngularFireAuth) {
    afauth.authState.subscribe((data) => {
      if (data == null) return;
      this.uid = data?.uid;
    });
    }

  grade(num: number) {
    if (this.grad == num && !this.flag) {
      this.grad = 0;
      this.flag = true;
    } else {
      this.grad = num;
      this.flag = false;
    }
  }

  addReview(): void {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    const formattedDate = `${year}/${month}/${day}`;
    if (this.grad != -1)
      this.db.addReview(this.trip!, {
        date: formattedDate,
        points: this.grad,
        text: this.reviewTextInput,
        uid: this.uid,
      });
  }
}
