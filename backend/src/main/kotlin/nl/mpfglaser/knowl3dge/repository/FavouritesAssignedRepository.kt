package nl.mpfglaser.knowl3dge.repository

import nl.mpfglaser.knowl3dge.model.FavouritesAssigned
import org.springframework.data.jpa.repository.JpaRepository

interface FavouritesAssignedRepository : JpaRepository<FavouritesAssigned, Int> {
    fun findByUserId(userId: Int): List<FavouritesAssigned>
}