package nl.mpfglaser.knowl3dge.service

import nl.mpfglaser.knowl3dge.model.User
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.stereotype.Service


@Service
class AuthenticationService(userService: UserService) : UserDetailsService {
    private val userService: UserService

    init {
        this.userService = userService
    }

    override fun loadUserByUsername(username: String): UserDetails {
        val user: User = userService.readUserByUsername(username)?: throw RuntimeException("User not found")
        return org.springframework.security.core.userdetails.User(user.username, user.password, getAuthorities(user.role!!))
    }

    private fun getAuthorities(role: String): Collection<GrantedAuthority> {
        return listOf(SimpleGrantedAuthority(role))
    }
}
