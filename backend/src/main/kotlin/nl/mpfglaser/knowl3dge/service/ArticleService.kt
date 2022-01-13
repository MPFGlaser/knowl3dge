package nl.mpfglaser.knowl3dge.service
import nl.mpfglaser.knowl3dge.model.Article
import nl.mpfglaser.knowl3dge.model.response.StatisticsDataPoint
import nl.mpfglaser.knowl3dge.repository.ArticleRepository
import org.springframework.http.ResponseEntity
import org.springframework.http.HttpStatus
import java.util.*

// Acts as the layer in-between the ArticleController and the ArticleRepository.
// Validates and modifies data where needed.
class ArticleService(private val repository: ArticleRepository) {
    // Finds all instances of Article in the repository. Returns 404 if no articles are found.
    fun findAll(): ResponseEntity<List<Article>>{
        val result = repository.findAll()
        if(result.isNotEmpty()){
            return ResponseEntity<List<Article>>(result, HttpStatus.OK)
        }
        return ResponseEntity<List<Article>>(null, HttpStatus.NOT_FOUND)
    }

    // Finds article by ID. Returns 404 if no article has been found, otherwise returns the article entity.
    fun findById(id: Int): ResponseEntity<Optional<Article>>{
        val result = repository.findById(id)
        if(result.isPresent){
            return ResponseEntity<Optional<Article>>(result, HttpStatus.OK)
        }
        return ResponseEntity<Optional<Article>>(null, HttpStatus.NOT_FOUND)
    }

    // Finds all articles matching the given ID(s)
    fun findAllById(ids: Iterable<Int>): ResponseEntity<List<Article>>{
        val result = repository.findAllById(ids)
        if(result.isNotEmpty()){
            return ResponseEntity<List<Article>>(result, HttpStatus.OK)
        }
        return ResponseEntity<List<Article>>(null, HttpStatus.NOT_FOUND)
    }

    fun findAllByTag(tags: Iterable<Int>): ResponseEntity<List<Article>>{
        val result = repository.findAllByTag(tags)
        if(result.isNotEmpty()){
            return ResponseEntity<List<Article>>(result, HttpStatus.OK)
        }
        return ResponseEntity<List<Article>>(null, HttpStatus.NOT_FOUND)
    }

    // Saves an article to the repository. Used for PUT and POST.
    fun save(article: Article): ResponseEntity<Article>{
        val result = repository.save(article)
            return ResponseEntity<Article>(result, HttpStatus.OK)
    }

    // Deletes an article by ID.
    fun deleteById(id: Int): ResponseEntity<String>{
        repository.deleteById(id)
        return ResponseEntity("Deleted", HttpStatus.OK)
    }

    // Get favourite statistics
    fun getFavouriteStatistics(): ResponseEntity<List<StatisticsDataPoint>>{
        val result: MutableList<StatisticsDataPoint> = mutableListOf()

        val articleIds = repository.findAll().map { it.id }

        for (articleId in articleIds) {
            val title = repository.findById(articleId!!).get().title
            val value = repository.getLikeCount(articleId)

            val dataPoint = StatisticsDataPoint()
            dataPoint.title = title
            dataPoint.value = value


            if(dataPoint.title.isNullOrBlank() || dataPoint.value == null){
                break
            }
            else{
                result.add(dataPoint)
            }
        }

        if(result.isNotEmpty()){
            return ResponseEntity<List<StatisticsDataPoint>>(result, HttpStatus.OK)
        }
        return ResponseEntity<List<StatisticsDataPoint>>(null, HttpStatus.NOT_FOUND)
    }
}