package nl.mpfglaser.knowl3dge.model

import javax.persistence.*

@Table(name = "users")
@Entity
open class User() {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    open var id: Int? = null

    @Column(name = "username", nullable = false, unique = true)
    open var username: String? = null

    @Column(name = "password", nullable = false)
    open var password: String? = null

    @Column(name = "role", nullable = false)
    open var role: String? = null

    @Column(name = "secret")
    open var secret: String? = null
}