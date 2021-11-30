package nl.mpfglaser.knowl3dge.security

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import java.util.*

@Configuration
class SecretGenerator {
    private val secretLength: Int = 32

    @Bean
    fun generateSecret(): String {
        val secret = ByteArray(secretLength)
        val random = java.security.SecureRandom()
        random.nextBytes(secret)
        return Base64.getEncoder().encodeToString(secret)
    }
}