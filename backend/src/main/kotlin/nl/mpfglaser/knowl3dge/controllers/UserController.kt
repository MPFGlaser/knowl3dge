package nl.mpfglaser.knowl3dge.controllers

import nl.mpfglaser.knowl3dge.model.request.UserCreateRequest
import nl.mpfglaser.knowl3dge.service.UserService
import org.springframework.http.ResponseEntity
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("/api/user")
class UserController(private val userService: UserService) {

    @PostMapping
    fun createUser(@RequestBody userCreateRequest: UserCreateRequest): ResponseEntity<Any> {
        userService.createUser(userCreateRequest)
        return ResponseEntity.ok().build()
    }

    @GetMapping("/getuserid/{username}")
    fun getUserIdByUsername(@PathVariable username: String): ResponseEntity<Int> = ResponseEntity.ok(userService.readUserByUsername(username)?.id)
}