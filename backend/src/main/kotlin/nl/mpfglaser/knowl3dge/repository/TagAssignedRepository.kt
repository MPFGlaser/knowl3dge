package nl.mpfglaser.knowl3dge.repository

import nl.mpfglaser.knowl3dge.model.TagsAssigned
import org.springframework.data.jpa.repository.JpaRepository

interface TagAssignedRepository: JpaRepository<TagsAssigned, Int> {
    fun findByTagId(tagId: Int): List<TagsAssigned>
    fun findByArticleId(articleId: Int): List<TagsAssigned>
}