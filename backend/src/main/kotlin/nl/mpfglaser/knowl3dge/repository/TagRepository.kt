package nl.mpfglaser.knowl3dge.repository

import nl.mpfglaser.knowl3dge.model.Tag
import org.springframework.data.jpa.repository.JpaRepository

interface TagRepository: JpaRepository<Tag, Int> {
}