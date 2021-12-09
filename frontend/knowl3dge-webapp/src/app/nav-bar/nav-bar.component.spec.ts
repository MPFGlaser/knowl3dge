import { AppRoutingModule } from './../app-routing.module';
import {
  BreakpointObserver,
  LayoutModule,
} from '@angular/cdk/layout';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavBarComponent } from './nav-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  let authServiceStub: Partial<AuthService>;
  let matSnackBarStub: Partial<MatSnackBar>;

  beforeEach(
    waitForAsync(() => {
      authServiceStub = {
        isLoggedIn: new BehaviorSubject<boolean>(true),
        currentUsername: new BehaviorSubject<string>('test'),
        currentUserId: new BehaviorSubject<number>(1),
      };

      TestBed.configureTestingModule({
        declarations: [NavBarComponent],
        imports: [
          NoopAnimationsModule,
          LayoutModule,
          MatButtonModule,
          MatIconModule,
          MatListModule,
          MatSidenavModule,
          MatToolbarModule,
          AppRoutingModule,
          MatIconModule,
          AppRoutingModule,
        ],
        providers: [
          { provide: BreakpointObserver },
          { provide: AuthService, useValue: authServiceStub },
          { provide: MatSnackBar, useValue: matSnackBarStub },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should have the username at the top right', () => {
    const headerNameDe: DebugElement = fixture.debugElement;
    const spanDe = headerNameDe.query(By.css('.username'));
    const span: HTMLElement = spanDe.nativeElement;
    expect(span.textContent).toContain('test');
  });
});
