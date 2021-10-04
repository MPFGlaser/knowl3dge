# [KNOWL3DGE](https://git.fhict.nl/knowl3dge/knowl3dge)

## Product Description

KNOWL3DGE aims to be a comprehensive knowledge base for everyone interested and/or involved in the 3D printing community. Being built as a responsive web application, users can access the information on all devices with the user interface scaling and changing to be appropriate for every screen and input type.  
The main features include users being able to see an overview of all issues and to filter them based on type of issue, type of printer, type of filament used, et cetera. Users will be able to vote on issues and can order them based on the number of votes (popularity/rate of occurrence).  
Administrators/contributors will be able to create and edit issues, as well as hide existing ones as they might become outdated or unnecessary. Additionally, they themselves, as well as trusted members of the community, will be able to assist other users via a live chat. This is intended to help with issues that are not (yet) listed on the knowledge base, or that users might need elaborated.  
Lastly, a statistics page will allow users and administrators alike to view what issues are most popular, providing more data compared to just sorting the issues on the search page.

### Main Features

- Responsive design
- Creating issues
- Editing issues
- Hiding (soft deleting) issues
- Viewing issues
- Sorting issues based on printer, filament, type of issue, and occurrence 
- Live chat to assist with uncertainties not solved by the issues already present
- Aggregated statistics page on the occurrence of issues 

## Planning & Backlog

All planning, including user stories, backlog, and sprint planning takes place on [my Jira board](https://mpfglaser.atlassian.net/jira/software/projects/KNOW/boards/1/backlog). Please request access if you cannot see it.  

## Build instructions
This project (for now just the backend) is built using Gradle 7.1.1. To build, simply clone the repository and run the `gradle build` command inside of the `backend` directory. Running it in the wrong location will result in the build failing.  
When running the application, it's important to have your connection details in the `application.properties` file, which either resides in the `backend/config` directory, or next to the `.jar` file after building. Templates of these files can be found in the `config/application-dev.properties` and `config/application-prod.properties` files. Be sure to **rename** them to `application.properties` because otherwise the application will **not** work. While the choice of database server and technology are free, this project was developed with MySQL in mind. Template files for an empty database and a pre-populated one (with dummy data) can be found in the `documentation/database` directory.

## Framework Selection

### Frontend

To read my research document I wrote for choosing Angular as my frontend framework, please refer to the [Frontend-research.md](documentation/Frontend-research.md) document.

### Backend

[Springboot](https://spring.io/projects/spring-boot)
Details to follow soon.

## REST API Documentation

| URL | Resource | Operation | Description |
|-----|----------|-----------|-------------|
| /api/users | Users | GET | Gets a list of all users |
| /api/users/{id} | Users | GET | Gets user with id {id} |
| /api/users/{id} | Users | DELETE | Deletes user with id {id} |
| /api/users/{id} | Users | PUT | Updates user with id {id} |
| /api/users | Users | POST | Creates a new user |
| /api/articles | Articles | GET | Gets a list of all Articles |
| /api/articles/{id} | Articles | GET | Gets article with id {id} |
| /api/articles?printerType=printerType | Articles | GET | Gets articles with a specific printerType |
| /api/articles?filamentType=filamentType | Articles | GET | Get articles with a specific filamentType |
| /api/articles?issueType=issueType | Articles | GET | Gets articles with a specific issueType |
| /api/articles/{id} | Articles | DELETE | Deletes article with id {id} |
| /api/articles/{id} | Articles | PUT | Updates article with id {id} |
| /api/articles | Articles | POST | Creates a new article |
