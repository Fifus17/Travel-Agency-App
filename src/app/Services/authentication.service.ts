import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Roles, User } from '../Interfaces/IUser';
import { DatabaseConnectionService } from './database-connection.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: any;
  userRoles: Roles = {
    guest: true,
    client: false,
    admin: false,
    manager: false,
    banned: false
  }
  persistance: string = 'local';

  constructor(private auth: AngularFireAuth, private db: DatabaseConnectionService ,private router: Router) {
    this.auth.authState.subscribe(async user => {
      if (user) {
        this.userData = user;
        const roles = await this.db.getRoles(user.uid);
        this.userRoles = roles as Roles;
      } else {
        this.userData = null;
      }
    })
   }

  async signIn(email: string, password: string) {
    await this.auth.setPersistence(this.persistance);
    return await this.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {this.router.navigate(['home'])
      .catch((error) => {window.alert(error.message)});})
  }

  async signUp(email: string, password: string, firstName: string, lastName: string) {
    return await this.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        if(result.user != null) {
        let userData = {
          uid: result.user.uid,
          email: email,
          firstName: firstName,
          lastName: lastName,
          roles: {
            guest: true,
            client: true,
            admin: false,
            manager: false,
            banned: false
          },
          history: [""],
          cart: [""],
          photoURL: ""
        }
        this.db.addUser(userData);
        this.router.navigate(['home']);
      }
      })
  }

  async signOut() {
    await this.auth.signOut();
    window.location.reload();
    this.router.navigate(['home']);
  }

  getCurrentUserData() {
    return this.auth.currentUser;
  }

  getAuthenticated(): Observable<any> {
    return this.auth.authState;
  }

  isLoggedIn() {
    return this.userData != null;
  }
}
