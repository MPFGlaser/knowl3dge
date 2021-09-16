package nl.mpfglaser.knowl3dge.controllers

import nl.mpfglaser.knowl3dge.model.Article
import nl.mpfglaser.knowl3dge.repository.ArticleRepository
import nl.mpfglaser.knowl3dge.service.ArticleService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*

// ArticleController always returns a ResponseEntity containing an object and an HttpResponse.
@RestController
@RequestMapping("/api/articles")
class ArticleController(repository: ArticleRepository) {
    val service = ArticleService(repository)

    // Returns all articles
    @GetMapping("")
    fun findAll(): ResponseEntity<List<Article>> = service.findAll()

    // Remnant of testing the controller. To be removed (or not).
    @GetMapping("/teapot")
    fun teapot(): ResponseEntity<String> = ResponseEntity<String>("I'm a teapot", HttpStatus.I_AM_A_TEAPOT)

    // Returns an article with the ID provided, if available.
    @GetMapping("/{id}")
    fun one(@PathVariable id: Int): ResponseEntity<Optional<Article>> = service.findById(id)

    // Saves an article and returns the saved values. Must provide the full article data.
    @PostMapping("/new")
    fun new(@RequestBody article: Article): ResponseEntity<Article> = service.save(article)

    // Edits an article. Must provide the full article data.
    @PutMapping("/edit")
    fun editById(@RequestBody article: Article): ResponseEntity<Article> = service.save(article)

    // Deletes an article based on ID.
    @DeleteMapping("/delete/{id}")
    fun deleteById(@PathVariable id: Int): ResponseEntity<String> = service.deleteById(id)
}