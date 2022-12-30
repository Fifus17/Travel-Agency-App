import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  settings: FormGroup;
  roles = [];

  constructor(public auth: AuthenticationService, public db: DatabaseConnectionService, fb: FormBuilder) {
    this.form = fb.group({
      selected:  new FormArray([])
     });
      this.settings = fb.group({
        persistence: new FormControl('local')
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

  onCheckboxChange(e: any) {
    const selected: FormArray = this.form.get('selected') as FormArray;
    let roles = this.users[e.target.id].roles;
    roles[e.target.className] = !roles[e.target.className];
    this.db.changeUserRoles(this.users[e.target.id].uid, roles);
  }

  isLocal() {
    return this.auth.persistence == 'local';
  }

  isSession() {
    return this.auth.persistence == 'session';
  }

  isNone() {
    return this.auth.persistence == 'none';
  }

  setLocal() {
    this.auth.changePersistence('local');
  }

  setSession() {
    this.auth.changePersistence('session');
  }

  setNone() {
    this.auth.changePersistence('none');
  }

}
