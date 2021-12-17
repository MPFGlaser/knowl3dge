package nl.mpfglaser.knowl3dge.config

import nl.mpfglaser.knowl3dge.filter.JWTAuthenticationFilter
import nl.mpfglaser.knowl3dge.filter.JWTAuthorizationFilter
import nl.mpfglaser.knowl3dge.service.AuthenticationService
import nl.mpfglaser.knowl3dge.service.UserService
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpMethod
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.CorsConfigurationSource
import org.springframework.web.cors.UrlBasedCorsConfigurationSource

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(
    prePostEnabled = true,
    securedEnabled = true,
    jsr250Enabled = true,
    proxyTargetClass = true)
class SecurityConfiguration(userService: UserService) : WebSecurityConfigurerAdapter() {
    private val bCryptPasswordEncoder: BCryptPasswordEncoder = BCryptPasswordEncoder()
    private val authenticationUserDetailService: AuthenticationService = AuthenticationService(userService)

    @Throws(Exception::class)
    override fun configure(http: HttpSecurity) {
        http.cors()
            .configurationSource(corsConfigurationSource())
            .and().csrf().disable().authorizeRequests()
            .antMatchers(HttpMethod.POST, AuthenticationConfigConstants.SIGN_UP_URL).permitAll()
            .antMatchers(HttpMethod.GET, AuthenticationConfigConstants.SIGN_UP_URL+"/getuserid/**").permitAll()
            .antMatchers(HttpMethod.POST, "/login").permitAll()
            .antMatchers("/chat").permitAll()
            .anyRequest().authenticated()
            .and()
            .addFilter(JWTAuthenticationFilter(authenticationManager()))
            .addFilter(JWTAuthorizationFilter(authenticationManager())) // this disables session creation on Spring Security
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)

    }

    fun corsConfigurationSource(): CorsConfigurationSource? {
        val configuration = CorsConfiguration()
        val allowOrigins: List<String> = listOf("http://localhost:4200", "https://knowl3dge.mpfglaser.nl", "http://192.168.1.100")
        configuration.allowedOrigins = allowOrigins
        configuration.allowedMethods = listOf("*")
        configuration.allowedHeaders = listOf("*")
        //in case authentication is enabled this flag MUST be set, otherwise CORS requests will fail
        configuration.allowCredentials = true
        val source = UrlBasedCorsConfigurationSource()
        source.registerCorsConfiguration("/**", configuration)
        return source
    }

    @Throws(Exception::class)
    public override fun configure(auth: AuthenticationManagerBuilder) {
        auth.userDetailsService<UserDetailsService?>(authenticationUserDetailService)
            .passwordEncoder(bCryptPasswordEncoder)
    }
}