package nl.mpfglaser.knowl3dge.controllers

import org.springframework.stereotype.Controller
import org.springframework.web.socket.CloseStatus
import org.springframework.web.socket.TextMessage
import org.springframework.web.socket.WebSocketSession
import org.springframework.web.socket.handler.TextWebSocketHandler


@Controller
class WebSocketController: TextWebSocketHandler() {

    private val webSocketSessions: MutableList<WebSocketSession> = ArrayList()

    @Throws(Exception::class)
    override fun afterConnectionEstablished(session: WebSocketSession) {
        webSocketSessions.add(session)
    }

    @Throws(Exception::class)
    override fun handleTextMessage(session: WebSocketSession, message: TextMessage) {
        for (webSocketSession in webSocketSessions) {
            webSocketSession.sendMessage(message)
        }
    }

    @Throws(Exception::class)
    override fun afterConnectionClosed(session: WebSocketSession, status: CloseStatus) {
        webSocketSessions.remove(session)
    }
}
