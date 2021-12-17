import { UserCredentials } from './../interfaces/userCredentials';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  register: boolean = false;
  isLoggedIn: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {
    this.userService.isLoggedIn.subscribe((value) => {
      this.isLoggedIn = value;
    });
  }

  userDetailsForm = this.formBuilder.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    passwordConfirm: ['', [Validators.required, Validators.minLength(6)]],
  }, { validator: this.checkPasswords });

  ngOnInit(): void {
    if (this.router.url === '/register') {
      this.register = true;
    }
  }

  toggleRegister() {
    this.register = !this.register;
  }

  checkPasswords(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.passwordConfirm.value;

    return pass === confirmPass ? null : { notSame: true };
  }

  async onSubmit() {
    const credentials: UserCredentials = {
      username: this.userDetailsForm.value.username,
      password: this.userDetailsForm.value.password,
    };

    if (this.register) {
      if (
        this.userDetailsForm.value.password ===
        this.userDetailsForm.value.passwordConfirm
      ) {
        if (!this.authService.register(credentials)) {
          this.snackBar.open('Something went wrong', '', { duration: 2500 });
        } else {
          this.snackBar.open('Account created. Welcome!', '', {
            duration: 2500,
          });
        }
      } else {
        this.snackBar.open('Passwords do not match', '', { duration: 2500 });
      }
    } else {
      if (await this.authService.login(credentials)) {
        this.router.navigate(['/']);
        this.snackBar.open('Welcome!', '', { duration: 2500 });
      } else {
        this.snackBar.open('Something went wrong', '', { duration: 2500 });
      }
    }
  }

  OnDestroy() {
    this.userService.isLoggedIn.unsubscribe();
  }
}
