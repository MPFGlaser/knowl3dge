package nl.mpfglaser.knowl3dge.filter

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import com.auth0.jwt.interfaces.DecodedJWT
import nl.mpfglaser.knowl3dge.config.AuthenticationConfigConstants
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter
import java.io.IOException
import javax.servlet.FilterChain
import javax.servlet.ServletException
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse


class JWTAuthorizationFilter(authenticationManager: AuthenticationManager?) :
    BasicAuthenticationFilter(authenticationManager) {
    @Throws(IOException::class, ServletException::class)
    override fun doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, chain: FilterChain) {
        val header = request.getHeader(AuthenticationConfigConstants.HEADER_STRING)

        if (header == null || !header.startsWith(AuthenticationConfigConstants.TOKEN_PREFIX)) {
            chain.doFilter(request, response)
            return
        }

        val authentication = getAuthentication(request)

        SecurityContextHolder.getContext().authentication = authentication
        chain.doFilter(request, response)
    }

    private fun getAuthentication(request: HttpServletRequest): UsernamePasswordAuthenticationToken? {
        val token: String = request.getHeader(AuthenticationConfigConstants.HEADER_STRING)
        if (token != null) {
            // parse the token.
            val verify: DecodedJWT = JWT.require(Algorithm.HMAC512(AuthenticationConfigConstants.SECRET.toByteArray()))
                .build()
                .verify(token.replace(AuthenticationConfigConstants.TOKEN_PREFIX, ""))
            val username: String = verify.subject
            val role: String = verify.getClaim("role").asString()

            return if (username != null) {
                 UsernamePasswordAuthenticationToken(username, null, getAuthorities(role))
            } else null
        }
        return null
    }

    private fun getAuthorities(role: String): Collection<GrantedAuthority?>? {
        return listOf(SimpleGrantedAuthority(role))
    }
}