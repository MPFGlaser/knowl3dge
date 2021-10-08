package nl.mpfglaser.knowl3dge.controllers

import nl.mpfglaser.knowl3dge.model.Article
import nl.mpfglaser.knowl3dge.model.Tag
import nl.mpfglaser.knowl3dge.model.TagsAssigned
import nl.mpfglaser.knowl3dge.repository.TagAssignedRepository
import nl.mpfglaser.knowl3dge.repository.TagRepository
import nl.mpfglaser.knowl3dge.service.TagService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

// TagController always returns a ResponseEntity containing an object and an HttpResponse.
@CrossOrigin(origins = ["http://localhost:4200"])
@RestController
@RequestMapping("/api/tags")
class TagController(tagRepository: TagRepository, tagAssignedRepository: TagAssignedRepository) {
    val service  = TagService(tagRepository, tagAssignedRepository)

    @GetMapping("/all")
    fun findAllTags(): ResponseEntity<List<Tag>> = service.findAllTags()

    @GetMapping("/all_asssigned")
    fun findAllAssignedTags(): ResponseEntity<List<TagsAssigned>> = service.findAllAssignedTags()

    @GetMapping("/all_assigned_aid/{id}")
    fun findAssignedTagByArticleId(@PathVariable id: Int): ResponseEntity<List<TagsAssigned>> = service.findAssignedTagByArticleId(id)

    @GetMapping("/all_assigned_tid/{id}")
    fun findAssignedTagByTagId(@PathVariable id: Int): ResponseEntity<List<TagsAssigned>> = service.findAssignedTagByTagId(id)

    @PostMapping("/new")
    fun new(@RequestBody tag: Tag): ResponseEntity<Tag> = service.save(tag)

    @PostMapping("/new_assignment")
    fun newAssignment(@RequestBody tagsAssigned: TagsAssigned): ResponseEntity<TagsAssigned> = service.saveAssignment(tagsAssigned)

    @PostMapping("/edit")
    fun edit(@RequestBody tag: Tag): ResponseEntity<Tag> = service.save(tag)

    @PostMapping("/edit_assignment")
    fun editAssignment(@RequestBody tagsAssigned: TagsAssigned): ResponseEntity<TagsAssigned> = service.saveAssignment(tagsAssigned)

    @DeleteMapping("/delete/{id}")
    fun delete(@PathVariable id: Int): ResponseEntity<String> = service.deleteById(id)

    @DeleteMapping("/delete_assignment")
    fun deleteAssignment(@RequestBody tagsAssigned: TagsAssigned): ResponseEntity<String> = service.deleteAssignment(tagsAssigned)
}