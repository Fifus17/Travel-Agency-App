import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  userName: string = 'User';
  user$ = this.auth.currentUser;

  constructor(private authService: AuthenticationService, private auth: AngularFireAuth) {
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

}
