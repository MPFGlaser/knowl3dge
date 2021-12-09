import { UserService } from './../services/user.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { LoginComponent } from './login.component';
import { BehaviorSubject } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let routerStub: Partial<Router>;
  let authServiceStub: Partial<AuthService>;
  let userServiceSpy: jasmine.SpyObj<UserService>;
  let snackBarStub: Partial<MatSnackBar>;

  beforeEach(() => {
    routerStub = {
      url: '/login',
    };

    userServiceSpy = jasmine.createSpyObj('UserService', ['isLoggedIn']);

    userServiceSpy.isLoggedIn = new BehaviorSubject<boolean>(false);

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: Router, useValue: routerStub },
        { provide: FormBuilder },
        { provide: AuthService, useValue: authServiceStub },
        { provide: UserService, useValue: userServiceSpy },
        { provide: MatSnackBar, useValue: snackBarStub },
      ],
      imports: [
        MatInputModule,
        MatCardModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
