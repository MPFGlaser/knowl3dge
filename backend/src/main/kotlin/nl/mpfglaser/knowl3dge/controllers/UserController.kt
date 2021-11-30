package nl.mpfglaser.knowl3dge.controllers

import nl.mpfglaser.knowl3dge.model.request.UserCreateRequest
import nl.mpfglaser.knowl3dge.service.UserService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/user")
class UserController(private val userService: UserService) {

    @PostMapping
    fun createUser(@RequestBody userCreateRequest: UserCreateRequest): ResponseEntity<Any> {
        userService.createUser(userCreateRequest)
        return ResponseEntity.ok().build()
    }
}