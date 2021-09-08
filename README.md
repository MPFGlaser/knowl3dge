# KNOWL3DGE

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

## Framework Selection

### Frontend

TBD

### Backend

[Springboot](https://spring.io/projects/spring-boot)
Details to follow soon.

## REST API Documentation

| URL | Resource | Operation | Description |
|-----|----------|-----------|-------------|
| /users | Users | GET | Gets a list of all users |
| /users/{id} | Users | GET | Gets user with id {id} |
| /users/{id} | Users | DELETE | Deletes user with id {id} |
| /users/{id} | Users | PUT | Updates user with id {id} |
| /users | Users | POST | Creates a new user |
| /articles | Articles | GET | Gets a list of all Articles |
| /articles/{id} | Articles | GET | Gets article with id {id} |
| /articles/?printerType=printerType | Articles | GET | Gets articles with a specific printerType |
| /articles/?filamentType=filamentType | Articles | GET | Get articles with a specific filamentType |
| /articles/?issueType=issueType | Articles | GET | Gets articles with a specific issueType |
| /articles/{id} | Articles | DELETE | Deletes article with id {id} |
| /articles/{id} | Articles | PUT | Updates article with id {id} |
| /articles | Articles | POST | Creates a new article |