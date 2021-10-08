package nl.mpfglaser.knowl3dge.repository

import nl.mpfglaser.knowl3dge.model.TagsAssigned
import org.springframework.data.jpa.repository.JpaRepository

interface TagAssignedRepository: JpaRepository<TagsAssigned, Int> {
}