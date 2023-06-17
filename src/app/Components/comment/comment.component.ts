import { Component, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DatabaseConnectionService } from 'src/app/Services/database-connection.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

  @Input('data') data:any = [];
  @Input('index') index:number = -1;
  uid:string = '';
  userData:any = {};
  name:string = '';

    constructor(afauth: AngularFireAuth, public db: DatabaseConnectionService) { 
      afauth.authState.subscribe((data) => {
        if (data == null) return;
        this.uid = data.uid;
        this.userData = this.db.getUser(this.uid);
        this.userData = this.userData.subscribe((data: any) => {
          this.name = data.firstName;
        });
      });
    }

}
