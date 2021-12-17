package nl.mpfglaser.knowl3dge.controllers

import nl.mpfglaser.knowl3dge.model.FavouritesAssigned
import nl.mpfglaser.knowl3dge.model.request.FavouriteRequest
import nl.mpfglaser.knowl3dge.model.request.UserCreateRequest
import nl.mpfglaser.knowl3dge.service.UserService
import org.springframework.http.ResponseEntity
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.*
import java.security.Principal

@RestController
@RequestMapping("/api/user")
class UserController(private val userService: UserService) {

    @PostMapping
    fun createUser(@RequestBody userCreateRequest: UserCreateRequest): ResponseEntity<Any> {
        userService.createUser(userCreateRequest)
        return ResponseEntity.ok().build()
    }

    @GetMapping("/getuserid/{username}")
    fun getUserIdByUsername(@PathVariable username: String): ResponseEntity<Int> =
        ResponseEntity.ok(userService.readUserByUsername(username)?.id)

    @PreAuthorize("#username == authentication.name")
    @GetMapping("/favourites/{username}")
    fun getFavourites(@PathVariable username: String): ResponseEntity<List<FavouritesAssigned>> =
        ResponseEntity.ok(userService.getFavourites(username))

    @PreAuthorize("hasAnyAuthority('USER', 'ADMIN')")
    @PostMapping("/favourites")
    fun addFavourite(@RequestBody favourite: FavouriteRequest, principal: Principal): ResponseEntity<Any> =
        ResponseEntity.ok(userService.addFavourite(favourite, principal.name))

    @PreAuthorize("hasAnyAuthority('USER', 'ADMIN')")
    @DeleteMapping("/favourites")
    fun removeFavourite(@RequestBody favourite: FavouriteRequest, principal: Principal): ResponseEntity<Any> =
        ResponseEntity.ok(userService.removeFavourite(favourite, principal.name))
}