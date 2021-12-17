package nl.mpfglaser.knowl3dge.service

import nl.mpfglaser.knowl3dge.model.FavouritesAssigned
import nl.mpfglaser.knowl3dge.model.User
import nl.mpfglaser.knowl3dge.model.request.FavouriteRequest
import nl.mpfglaser.knowl3dge.model.request.UserCreateRequest
import nl.mpfglaser.knowl3dge.repository.ArticleRepository
import nl.mpfglaser.knowl3dge.repository.FavouritesAssignedRepository
import nl.mpfglaser.knowl3dge.repository.UserRepository
import nl.mpfglaser.knowl3dge.security.SecretGenerator
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.stereotype.Service

@Service
class UserService(
    private val userRepository: UserRepository,
    private val favouritesAssignedRepository: FavouritesAssignedRepository,
) {
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
        if (readUserByUsername(userCreateRequest.username) != null) {
            throw RuntimeException("Username already exists")
        }

        val user = User()
        user.username = userCreateRequest.username
        user.password = passwordEncoder.encode(userCreateRequest.password)
        user.role = "USER"
        user.secret = secretGenerator.generateSecret()

        userRepository.save(user)
    }

    fun getFavourites(username: String): List<FavouritesAssigned> {
        val id = readUserByUsername(username)!!.id!!
        return favouritesAssignedRepository.findByUserId(id)
    }

    fun addFavourite(favourite: FavouriteRequest, username: String) {
        val favouriteAssigned = FavouritesAssigned()
        favouriteAssigned.userId = readUserByUsername(username)!!.id
        favouriteAssigned.articleId = favourite.articleId!!
        favouritesAssignedRepository.save(favouriteAssigned)
    }

    // Gets all favourites for the user, then deletes the favourite with the given articleId
    fun removeFavourite(favourite: FavouriteRequest, username: String) {
        val favouritesAssigned = this.getFavourites(username)
        for(fav in favouritesAssigned) {
            if(fav.articleId == favourite.articleId) {
                favouritesAssignedRepository.delete(fav)
            }
        }
    }
}