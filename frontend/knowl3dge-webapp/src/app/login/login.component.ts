import { UserCredentials } from './../interfaces/userCredentials';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  register: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  userDetailsForm = this.formBuilder.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    passwordConfirm: ['', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit(): void {
    if (this.router.url === '/register') {
      this.register = true;
    }
  }

  toggleRegister() {
    this.register = !this.register;
  }

  async onSubmit() {
    const credentials: UserCredentials = {
      username: this.userDetailsForm.value.username,
      password: this.userDetailsForm.value.password,
    };

    if (this.register) {
      if (!this.authService.register(credentials)) {
        this.snackBar.open('Something went wrong', '', { duration: 2500 });
      } else {
        this.snackBar.open('Account created. Welcome!', '', { duration: 2500 });
      }
    } else {
      this.authService.login(credentials)
      console.warn(this.authService.isCurrentlyLoggedIn());
      if (this.authService.isCurrentlyLoggedIn()) {
        this.snackBar.open('Welcome!', '', { duration: 2500 });
      } else {
        this.snackBar.open('Something went wrong', '', { duration: 2500 });
      }
    }
  }
}
