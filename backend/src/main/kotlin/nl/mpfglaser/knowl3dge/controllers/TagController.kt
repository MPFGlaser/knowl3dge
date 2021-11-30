package nl.mpfglaser.knowl3dge.controllers

import nl.mpfglaser.knowl3dge.model.Tag
import nl.mpfglaser.knowl3dge.model.TagsAssigned
import nl.mpfglaser.knowl3dge.repository.TagAssignedRepository
import nl.mpfglaser.knowl3dge.repository.TagRepository
import nl.mpfglaser.knowl3dge.service.TagService
import org.springframework.http.ResponseEntity
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.*

// TagController always returns a ResponseEntity containing an object and an HttpResponse.
@CrossOrigin(origins = ["http://localhost:4200"])
@RestController
@RequestMapping("/api/tags")
class TagController(tagRepository: TagRepository, tagAssignedRepository: TagAssignedRepository) {
    val service  = TagService(tagRepository, tagAssignedRepository)

    @GetMapping("/all")
    @PreAuthorize("hasAuthority('USER')")
    fun findAllTags(): ResponseEntity<List<Tag>> = service.findAllTags()

    @GetMapping("/all_assigned")
    @PreAuthorize("hasAuthority('USER')")
    fun findAllAssignedTags(): ResponseEntity<List<TagsAssigned>> = service.findAllAssignedTags()

    @GetMapping("/all_assigned_aid/{id}")
    @PreAuthorize("hasAuthority('USER')")
    fun findAssignedTagByArticleId(@PathVariable id: Int): ResponseEntity<List<TagsAssigned>> = service.findAssignedTagByArticleId(id)

    @GetMapping("/all_assigned_tid/{id}")
    @PreAuthorize("hasAuthority('USER')")
    fun findAssignedTagByTagId(@PathVariable id: Int): ResponseEntity<List<TagsAssigned>> = service.findAssignedTagByTagId(id)

    @PostMapping("/new")
    @PreAuthorize("hasAuthority('ADMIN')")
    fun new(@RequestBody tag: Tag): ResponseEntity<Tag> = service.save(tag)

    @PostMapping("/new_assignment")
    @PreAuthorize("hasAuthority('ADMIN')")
    fun newAssignment(@RequestBody tagsAssigned: TagsAssigned): ResponseEntity<TagsAssigned> = service.saveAssignment(tagsAssigned)

    @PostMapping("/edit")
    @PreAuthorize("hasAuthority('ADMIN')")
    fun edit(@RequestBody tag: Tag): ResponseEntity<Tag> = service.save(tag)

    @PostMapping("/edit_assignment")
    @PreAuthorize("hasAuthority('ADMIN')")
    fun editAssignment(@RequestBody tagsAssigned: TagsAssigned): ResponseEntity<TagsAssigned> = service.saveAssignment(tagsAssigned)

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    fun delete(@PathVariable id: Int): ResponseEntity<String> = service.deleteById(id)

    @DeleteMapping("/delete_assignment")
    @PreAuthorize("hasAuthority('ADMIN')")
    fun deleteAssignment(@RequestBody tagsAssigned: TagsAssigned): ResponseEntity<String> = service.deleteAssignment(tagsAssigned)
}