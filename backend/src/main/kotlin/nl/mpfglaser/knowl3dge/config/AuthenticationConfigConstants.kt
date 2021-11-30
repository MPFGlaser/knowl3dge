package nl.mpfglaser.knowl3dge.config

object AuthenticationConfigConstants {
        // FIX THIS!!!
        const val SECRET = "Java_to_Dev_Secret"
        const val EXPIRATION_TIME: Long = 864000000 // 10 days
        const val TOKEN_PREFIX = "Bearer "
        const val HEADER_STRING = "Authorization"
        const val SIGN_UP_URL = "/api/user"
}