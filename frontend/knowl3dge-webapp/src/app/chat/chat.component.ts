import { Component, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from '../services/message.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy, AfterViewChecked {
  message: string = '';
  user: string = '';

  constructor(
    public messageService: MessageService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.currentUsername.subscribe((user) => {
      this.user = user;
    });
    this.messageService.openWebSocket();
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  ngOnDestroy(): void {
    this.messageService.closeWebSocket();
    this.userService.currentUsername.unsubscribe();
  }

  sendMessage(sendForm: NgForm) {
    if (this.messageService.isOpen()) {
      if (sendForm.value.message) {
        this.messageService.sendMessage({
          user: this.user,
          message: sendForm.value.message,
        });
        sendForm.controls.message.setValue('');
      }
    } else {
      this.ngOnInit();
      alert('WebSocket is not open!');
    }
  }

  private scrollToBottom(): void {
    try {
      var objDiv = document.getElementById('chatContainer');
      objDiv!.scrollTop = objDiv!.scrollHeight + 100;
    } catch (error) {
      console.log(error);
    }
  }
}
