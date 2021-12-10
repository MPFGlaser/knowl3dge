package nl.mpfglaser.knowl3dge.model

import javax.persistence.*

@Table(name = "favourites_assigned")
@Entity
open class FavouritesAssigned {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    open var id: Int? = null

    @Column(name = "article_id")
    open var articleId: Int? = null

    @Column(name = "user_id")
    open var userId: Int? = null
}