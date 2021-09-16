package nl.mpfglaser.knowl3dge.repository

import nl.mpfglaser.knowl3dge.model.Article
import org.springframework.data.jpa.repository.JpaRepository

// Uses the JpaRepository interface, so no need to write any functions for now.
interface ArticleRepository: JpaRepository<Article, Int> {
}