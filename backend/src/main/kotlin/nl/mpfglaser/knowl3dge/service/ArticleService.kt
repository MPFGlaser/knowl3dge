package nl.mpfglaser.knowl3dge.service

import nl.mpfglaser.knowl3dge.model.Article
import nl.mpfglaser.knowl3dge.repository.ArticleRepository
import org.apache.coyote.Response
import org.springframework.http.ResponseEntity
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.ResponseStatus
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

    fun save(article: Article): ResponseEntity<Article>{
        val result = repository.save(article)
            return ResponseEntity<Article>(result, HttpStatus.OK)
    }

    fun deleteById(id: Int): ResponseEntity<String>{
        repository.deleteById(id)
        return ResponseEntity("Deleted", HttpStatus.OK)
    }
}