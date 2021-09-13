package nl.mpfglaser.knowl3dge.repository

import nl.mpfglaser.knowl3dge.model.Article
import org.springframework.data.jpa.repository.JpaRepository

interface ArticleRepository: JpaRepository<Article, Int> {
}