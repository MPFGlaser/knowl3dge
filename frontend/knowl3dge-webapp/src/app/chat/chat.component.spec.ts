import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { asyncData } from 'src/testing/async-observable-helpers';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from '../services/message.service';
import { UserService } from '../services/user.service';

import { ChatComponent } from './chat.component';
import { BehaviorSubject } from 'rxjs';

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;

  let messageServiceSpy: jasmine.SpyObj<MessageService>;
  let userServiceStub: Partial<UserService>;

  beforeEach(async () => {
    messageServiceSpy = jasmine.createSpyObj('MessageService', [
      'openWebSocket',
      'closeWebSocket',
      'sendMessage',
      'isOpen',
    ]);

    userServiceStub = {
      isLoggedIn: new BehaviorSubject<boolean>(true),
      currentUsername: new BehaviorSubject<string>('test'),
      currentUserId: new BehaviorSubject<number>(1),
    };

    await TestBed.configureTestingModule({
      declarations: [ChatComponent],
      providers: [
        { provide: MessageService, useValue: messageServiceSpy },
        { provide: UserService, useValue: userServiceStub },
      ],
      imports: [
        FormsModule,
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule,
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    messageServiceSpy.isOpen.and.returnValue(true);
    expect(component).toBeTruthy();
  });
});
