package nl.mpfglaser.knowl3dge.repository

import nl.mpfglaser.knowl3dge.model.Article
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param

// Uses the JpaRepository interface, so no need to write any functions for now.
interface ArticleRepository: JpaRepository<Article, Int> {
    @Query("SELECT a FROM Article a WHERE a.id in (SELECT at.article.id FROM TagsAssigned at WHERE at.tag.id IN :tags)")
    fun findAllByTag(@Param("tags") tags: Iterable<Int>?): List<Article>
}