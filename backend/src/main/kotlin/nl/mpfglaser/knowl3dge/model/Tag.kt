package nl.mpfglaser.knowl3dge.model

import javax.persistence.*

@Table(
    name = "tags", uniqueConstraints = [
        UniqueConstraint(name = "tags_id_uindex", columnNames = ["id"])
    ]
)
@Entity
open class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    open var id: Int? = null

    @Column(name = "name", length = 32)
    open var name: String? = null

    @Column(name = "type")
    open var type: Int? = null
}