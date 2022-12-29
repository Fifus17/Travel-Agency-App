import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/Interfaces/IUser';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { DatabaseConnectionService } from 'src/app/Services/database-connection.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  users: User[] = [];
  subscription: Subscription | undefined;
  form: FormGroup;

  constructor(public auth: AuthenticationService, public db: DatabaseConnectionService, fb: FormBuilder) {
    this.form = fb.group({
      selected:  new FormArray([])
     });
   }

  ngOnInit(): void {
    this.subscription = this.db.getUsers().subscribe((users) => {
      this.users = [];
      for (let user of users) {
        let userToAdd = new User(user.payload.val());
        userToAdd.uid = user.payload.key || 'undefined';
        this.users.push(userToAdd);
      }
      console.log(this.users);
    });
  }

}
