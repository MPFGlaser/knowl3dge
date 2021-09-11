package nl.mpfglaser.knowl3dge.model

import java.util.*
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "articles")
class Article {
    @Id
    @Column(name = "id")
    var id: Int = -1

    @Column(name = "author_id")
    var author_id: Int = -1

    @Column(name = "creation_date")
    var creation_date: Date = Date()

    @Column(name = "edit_date")
    var edit_date: Date = Date()

    @Column(name = "content")
    var content: String = "No content found"
}