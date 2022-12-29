import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent {

  constructor(private auth: AuthenticationService) { }

  error: boolean = false;

  registerForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
    ]),
    lastName: new FormControl('', [
      Validators.required,
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  submit(){
    if (!this.registerForm.valid) {
      this.error = true;
      return;
    }
    this.error = false;
    let email = this.registerForm.get('email')!.value;
    let pass = this.registerForm.get('password')!.value;
    let firstName = this.registerForm.get('firstName')!.value;
    let lastName = this.registerForm.get('lastName')!.value;
    if(email != null && pass != null && firstName != null && lastName != null) this.auth.signUp(email, pass, firstName, lastName);
    this.registerForm.reset();
  }
}
