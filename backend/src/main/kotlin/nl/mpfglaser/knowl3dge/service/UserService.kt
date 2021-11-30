package nl.mpfglaser.knowl3dge.service

import nl.mpfglaser.knowl3dge.model.User
import nl.mpfglaser.knowl3dge.model.request.UserCreateRequest
import nl.mpfglaser.knowl3dge.repository.UserRepository
import nl.mpfglaser.knowl3dge.security.SecretGenerator
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.stereotype.Service
import java.lang.RuntimeException

@Service
class UserService(private val userRepository: UserRepository) {
    private val passwordEncoder: BCryptPasswordEncoder = BCryptPasswordEncoder()
    private val secretGenerator: SecretGenerator = SecretGenerator()

    fun readUserByUsername(username: String): User? {
        return try {
            userRepository.findByUsername(username)
        } catch (e: Exception) {
            null
        }
    }

    fun createUser(userCreateRequest: UserCreateRequest) {
        if(readUserByUsername(userCreateRequest.username) != null) {
            throw RuntimeException("Username already exists")
        }

        val user = User()
        user.username = userCreateRequest.username
        user.password = passwordEncoder.encode(userCreateRequest.password)
        user.role = "USER"
        user.secret = secretGenerator.generateSecret()

        userRepository.save(user)
    }
}