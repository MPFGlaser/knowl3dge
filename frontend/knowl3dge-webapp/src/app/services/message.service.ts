import { ChatMessage } from './../interfaces/chatMessage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  webSocket: WebSocket;
  messages: ChatMessage[] = [];

  apiBaseUrl = 'ws://localhost:8080/chat';

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
