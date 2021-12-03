import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit, OnDestroy {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  isLoggedIn = false;
  currentUsername = '';
  currentUserId = -1;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe((value) => {
      this.loginChange(value);
    });
    this.authService.currentUsername.subscribe((value) => {
      this.currentUsername = value;
    });
    this.authService.currentUserId.subscribe((value) => {
      this.currentUserId = value;
    });
  }

  loginChange(value: boolean) {
    if (this.isLoggedIn) {
      this.isLoggedIn = value;
      this.snackBar.open('You have been logged out', '', {
        duration: 2500,
      });
    } else {
      this.isLoggedIn = value;
    }
  }

  ngOnDestroy(): void {
    this.authService.isLoggedIn.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }
}
