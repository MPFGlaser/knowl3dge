package nl.mpfglaser.knowl3dge.service

import nl.mpfglaser.knowl3dge.model.Article
import nl.mpfglaser.knowl3dge.repository.ArticleRepository
import org.springframework.http.ResponseEntity
import org.springframework.http.HttpStatus
import java.util.*


class ArticleService(private val repository: ArticleRepository) {
    fun findAll(): ResponseEntity<List<Article>>{
        val result = repository.findAll()
        if(result.isNotEmpty()){
            return ResponseEntity<List<Article>>(result, HttpStatus.OK)
        }
        return ResponseEntity<List<Article>>(null, HttpStatus.NOT_FOUND)
    }

    fun findById(id: Int): ResponseEntity<Optional<Article>>{
        val result = repository.findById(id)
        if(result.isPresent){
            return ResponseEntity<Optional<Article>>(result, HttpStatus.OK)
        }
        return ResponseEntity<Optional<Article>>(null, HttpStatus.NOT_FOUND)
    }
}