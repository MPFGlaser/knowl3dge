package nl.mpfglaser.knowl3dge.model

import javax.persistence.*

@Table(name = "tags_assigned")
@Entity
open class TagsAssigned {
    @ManyToOne
    @JoinColumn(name = "tag_id")
    open var tag: Tag? = null

    @ManyToOne
    @JoinColumn(name = "article_id")
    open var article: Article? = null

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    open var id: Int? = null
}