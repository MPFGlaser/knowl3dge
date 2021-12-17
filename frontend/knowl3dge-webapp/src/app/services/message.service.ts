import { ChatMessage } from './../interfaces/chatMessage';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  webSocket: WebSocket;
  messages: ChatMessage[] = [];

  apiBaseUrl = environment.API_URL_CHAT;

  constructor() {
    this.webSocket = new WebSocket(this.apiBaseUrl);
  }

  openWebSocket() {
    this.webSocket.onopen = (event) => {
      console.log('WebSocket is open: ' + event);
    };

    this.webSocket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      this.messages.push(message);
    };

    this.webSocket.onclose = (event) => {
      console.log('WebSocket is closed:');
      console.log(event);
    };
  }

  isOpen(){
    return this.webSocket.readyState === WebSocket.OPEN;
  }

  sendMessage(message: ChatMessage) {
    this.webSocket.send(JSON.stringify(message));
  }

  closeWebSocket() {
    this.webSocket.close();
  }
}
