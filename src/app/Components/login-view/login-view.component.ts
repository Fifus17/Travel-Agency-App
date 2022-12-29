import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {

  constructor(private auth: AuthenticationService) { }
  error: boolean = false;

  loginForm = new FormGroup({
    login: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  submit(){
    if (!this.loginForm.valid) {
      this.error = true;
      return;
    }
    this.error = false;
    let email = this.loginForm.get('login')!.value;
    let pass = this.loginForm.get('password')!.value;
    if(email != null && pass != null) this.auth.signIn(email, pass);
    this.loginForm.reset();
  }

}
