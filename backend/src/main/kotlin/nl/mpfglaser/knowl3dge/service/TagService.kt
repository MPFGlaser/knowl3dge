package nl.mpfglaser.knowl3dge.service

import nl.mpfglaser.knowl3dge.model.Article
import nl.mpfglaser.knowl3dge.model.Tag
import nl.mpfglaser.knowl3dge.model.TagsAssigned
import nl.mpfglaser.knowl3dge.repository.TagAssignedRepository
import nl.mpfglaser.knowl3dge.repository.TagRepository
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity

class TagService(private val tagRepository: TagRepository, private val tagAssignedRepository: TagAssignedRepository) {

    // Returns a list of all tags
    fun findAllTags(): ResponseEntity<List<Tag>>{
        val result = tagRepository.findAll()
        if(result.isNotEmpty()){
            return ResponseEntity<List<Tag>>(result, HttpStatus.OK)
        }
        return ResponseEntity<List<Tag>>(null, HttpStatus.NOT_FOUND)
    }

    // Returns a list of all assigned tags
    fun findAllAssignedTags(): ResponseEntity<List<TagsAssigned>>{
        val result = tagAssignedRepository.findAll()
        if(result.isNotEmpty()){
            return ResponseEntity<List<TagsAssigned>>(result, HttpStatus.OK)
        }
        return ResponseEntity<List<TagsAssigned>>(null, HttpStatus.NOT_FOUND)
    }

    // Returns a list of all assigned tags that match the given article_id
    fun findAssignedTagByArticleId(article_id: Int): ResponseEntity<List<TagsAssigned>>{
        val result = tagAssignedRepository.findByArticle(article_id)
        if(result.isNotEmpty()){
            return ResponseEntity<List<TagsAssigned>>(result, HttpStatus.OK)
        }
        return ResponseEntity<List<TagsAssigned>>(null, HttpStatus.NOT_FOUND)
    }

    // Returns a list of all assigned tags that match the given tag_id
    fun findAssignedTagByTagId(tag_id: Int): ResponseEntity<List<TagsAssigned>>{
        val result = tagAssignedRepository.findByTag(tag_id)
        if(result.isNotEmpty()){
            return ResponseEntity<List<TagsAssigned>>(result, HttpStatus.OK)
        }
        return ResponseEntity<List<TagsAssigned>>(null, HttpStatus.NOT_FOUND)
    }

    fun save(tag: Tag): ResponseEntity<Tag>{
        val result = tagRepository.save(tag)
        return ResponseEntity<Tag>(result, HttpStatus.OK)
    }

    fun saveAssignment(tagsAssigned: TagsAssigned): ResponseEntity<TagsAssigned>{
        val result = tagAssignedRepository.save(tagsAssigned)
        return ResponseEntity<TagsAssigned>(result, HttpStatus.OK)
    }

    fun deleteById(id: Int): ResponseEntity<String>{
        tagRepository.deleteById(id)
        return ResponseEntity<String>("Deleted", HttpStatus.OK)
    }

    fun deleteAssignment(tagsAssigned: TagsAssigned): ResponseEntity<String>{
        tagAssignedRepository.delete(tagsAssigned)
        return ResponseEntity<String>("Deleted", HttpStatus.OK)
    }
}