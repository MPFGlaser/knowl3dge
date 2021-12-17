import { UserService } from './../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.userService.currentUsername.subscribe((value) => {
      this.currentUsername = value;
    });
    this.userService.currentUserId.subscribe((value) => {
      this.currentUserId = value;
    });
    this.userService.isLoggedIn.subscribe((value) => {
      this.isLoggedIn = value;
    });
  }

  ngOnDestroy(): void {
    this.userService.currentUsername.unsubscribe();
    this.userService.currentUserId.unsubscribe();
    this.userService.isLoggedIn.unsubscribe();
  }

  logout() {
    this.snackBar.open('You have been logged out', '', {
      duration: 2500,
    });
    this.userService.emptyLocalStorage();
  }
}
