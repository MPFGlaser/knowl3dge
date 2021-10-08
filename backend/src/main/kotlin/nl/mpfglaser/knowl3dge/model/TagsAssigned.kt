package nl.mpfglaser.knowl3dge.model

import javax.persistence.Entity
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne
import javax.persistence.Table

@Table(name = "tags_assigned")
@Entity
open class TagsAssigned {
    @ManyToOne
    @JoinColumn(name = "tag_id")
    open var tag: Tag? = null

    @ManyToOne
    @JoinColumn(name = "article_id")
    open var article: Article? = null
}