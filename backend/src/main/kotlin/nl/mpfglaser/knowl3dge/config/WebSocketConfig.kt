package nl.mpfglaser.knowl3dge.config

import nl.mpfglaser.knowl3dge.controllers.WebSocketController
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.socket.config.annotation.EnableWebSocket
import org.springframework.web.socket.config.annotation.WebSocketConfigurer
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry


@Configuration
@EnableWebSocket
class WebSocketConfig : WebSocketConfigurer {
    private val chatEndpoint = "/chat"

    override fun registerWebSocketHandlers(webSocketHandlerRegistry: WebSocketHandlerRegistry) {
        webSocketHandlerRegistry.addHandler(getChatWebSocketHandler(), chatEndpoint)
            .setAllowedOrigins("*")
    }

    @Bean
    fun getChatWebSocketHandler(): WebSocketController {
        return WebSocketController()
    }
}
