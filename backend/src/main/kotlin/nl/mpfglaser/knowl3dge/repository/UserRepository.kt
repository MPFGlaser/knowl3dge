package nl.mpfglaser.knowl3dge.repository

import nl.mpfglaser.knowl3dge.model.User
import org.springframework.data.jpa.repository.JpaRepository

interface UserRepository: JpaRepository<User, Int> {
    fun findByUsername(username: String): User?
}