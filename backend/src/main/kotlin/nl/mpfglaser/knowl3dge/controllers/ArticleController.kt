package nl.mpfglaser.knowl3dge.controllers

import nl.mpfglaser.knowl3dge.model.Article
import nl.mpfglaser.knowl3dge.repository.ArticleRepository
import nl.mpfglaser.knowl3dge.service.ArticleService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("/api/articles")
class ArticleController(repository: ArticleRepository) {
    val service = ArticleService(repository)

    @GetMapping("")
    fun findAll(): ResponseEntity<List<Article>> = service.findAll()

    @GetMapping("/teapot")
    fun teapot(): ResponseEntity<String> = ResponseEntity<String>("I'm a teapot", HttpStatus.I_AM_A_TEAPOT)

    @GetMapping("/{id}")
    fun one(@PathVariable id: Int): ResponseEntity<Optional<Article>> = service.findById(id)

    @PostMapping("/new")
    fun new(@RequestBody article: Article): ResponseEntity<Article> = service.save(article)

    @PutMapping("/edit")
    fun editById(@RequestBody article: Article): ResponseEntity<Article> = service.save(article)

    @DeleteMapping("/delete/{id}")
    fun deleteById(@PathVariable id: Int): ResponseEntity<String> = service.deleteById(id)
}