import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  register: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.router.url === '/register') {
      this.register = true;
    }
  }

  toggleRegister() {
    this.register = !this.register;
  }
}
