package nl.mpfglaser.knowl3dge.filter

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import nl.mpfglaser.knowl3dge.config.AuthenticationConfigConstants
import nl.mpfglaser.knowl3dge.model.User
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.Authentication
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter
import java.io.IOException
import java.util.*
import javax.servlet.FilterChain
import javax.servlet.ServletException
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

class JWTAuthenticationFilter(authenticationManager: AuthenticationManager) : UsernamePasswordAuthenticationFilter() {
    private val authenticationManager: AuthenticationManager

    init {
        this.authenticationManager = authenticationManager
    }

    override fun attemptAuthentication(
        request: HttpServletRequest?,
        response: HttpServletResponse?
    ): Authentication {
        try {
            val credentials: User = ObjectMapper().readValue(request!!.inputStream)
            return authenticationManager.authenticate(
                UsernamePasswordAuthenticationToken(credentials.username, credentials.password, ArrayList())
            )
        } catch (e: Exception) {
            throw RuntimeException(e)
        }
    }

    @Throws(IOException::class, ServletException::class)
    override fun successfulAuthentication(
        request: HttpServletRequest?,
        response: HttpServletResponse,
        chain: FilterChain,
        auth: Authentication
    ) {
        try {
            val token: String = JWT.create()
                .withSubject((auth.principal as org.springframework.security.core.userdetails.User).username)
                .withClaim("role", auth.authorities.iterator().next().authority)
                .withExpiresAt(Date(System.currentTimeMillis() + AuthenticationConfigConstants.EXPIRATION_TIME))
                .sign(Algorithm.HMAC512(AuthenticationConfigConstants.SECRET.toByteArray()))

            // JWT as body
//            response.contentType = "application/json"
//            response.characterEncoding = "UTF-8"
//            response.writer.write(
//                "{\"" + AuthenticationConfigConstants.HEADER_STRING + "\":\"" + AuthenticationConfigConstants.TOKEN_PREFIX + token + "\"}"
//            )

            // JWT as header
            response.addHeader(
                AuthenticationConfigConstants.HEADER_STRING,
                AuthenticationConfigConstants.TOKEN_PREFIX + token
            )
        } catch (e: Exception) {
            throw Exception(e)
        }
    }
}