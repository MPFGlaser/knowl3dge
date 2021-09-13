package nl.mpfglaser.knowl3dge.model

import java.time.Instant
import javax.persistence.*

@Table(name = "articles")
@Entity
open class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    open var id: Int? = null

    @Column(name = "author_id")
    open var authorId: Int? = null

    @Lob
    @Column(name = "title", columnDefinition = "TEXT")
    open var title: String? = null

    @Lob
    @Column(name = "content", columnDefinition = "LONGTEXT")
    open var content: String? = null

    @Column(name = "creation_date")
    open var creationDate: Instant? = null

    @Column(name = "edit_date")
    open var editDate: Instant? = null
}