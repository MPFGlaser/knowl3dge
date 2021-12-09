import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	id("org.springframework.boot") version "2.5.4"
	id("io.spring.dependency-management") version "1.0.11.RELEASE"
	id ("org.sonarqube") version "3.3"
	kotlin("jvm") version "1.5.21"
	kotlin("plugin.spring") version "1.5.21"
	kotlin("plugin.jpa") version "1.5.21"
}

sonarqube {
	properties {
		property("sonar.projectKey", "knowl3dge_knowl3dge_AXyeP_h_EdZwuMC7wfFT")
		property ("sonar.qualitygate.wait", true)
	}
}

group = "nl.mpfglaser"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_11

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-data-jpa:2.6.1")
	implementation("org.springframework.boot:spring-boot-starter-web:2.6.1")
	implementation("org.springframework.boot:spring-boot-starter-security:2.6.1")
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin:2.13.0")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
	implementation("org.hibernate:hibernate-core:5.6.1.Final")
	implementation("com.auth0:java-jwt:3.18.2")
	testImplementation("org.springframework.boot:spring-boot-starter-test:2.6.1")
	testImplementation(platform("org.junit:junit-bom:5.8.0"))
	testImplementation("org.junit.jupiter:junit-jupiter:5.8.2")
	runtimeOnly("mysql:mysql-connector-java:8.0.25")
	runtimeOnly("com.h2database:h2:2.0.202")

}

tasks.withType<KotlinCompile> {
	kotlinOptions {
		freeCompilerArgs = listOf("-Xjsr305=strict")
		jvmTarget = "11"
	}
}

tasks.withType<Test> {
	useJUnitPlatform()
}