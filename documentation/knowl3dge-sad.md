# KNOWL3DGE Software Architecture Document

## Introduction

In this document the architecture of the software (KNOWL3DGE) will be described and drawn out in several diagrams following the [C4 model(https://c4model.com/)].

## System Context (C1)

![The system context diagram](media/knowl3dge-context.png)

## Containers & Tech Choices (C2)

![The container diagram](media/knowl3dge-containers.png)

## Components (C3)

![The components diagram](media/knowl3dge-components.png)

## Class & Sequence Diagrams (C4)

![The REST Controller class diagram](media/restcontrollers.png)

## Persistence per component

T.B.A.

## Interface Documentation

T.B.A.

## REST API Documentation

| URL                             | Resource     | Operation | Description                                                                                          |
| ------------------------------- | ------------ | --------- | ---------------------------------------------------------------------------------------------------- |
| /api/users                      | Users        | GET       | Gets a list of all users                                                                             |
| /api/users/{id}                 | Users        | GET       | Gets user with id {id}                                                                               |
| /api/users/{id}                 | Users        | DELETE    | Deletes user with id {id}                                                                            |
| /api/users/{id}                 | Users        | PUT       | Updates user with id {id}                                                                            |
| /api/users                      | Users        | POST      | Creates a new user                                                                                   |
| /api/articles                   | Articles     | GET       | Gets a list of all Articles                                                                          |
| /api/articles/{id}              | Articles     | GET       | Gets article with id {id}                                                                            |
| /api/articles?tag={tagId}       | Articles     | GET       | Gets articles with a specific {tagId}                                                                |
| /api/articles?id={articleId}    | Articles     | GET       | Get articles with a specific {articleId}. Can be used to request multiple specific articles at once. |
| /api/articles/{id}              | Articles     | DELETE    | Deletes article with id {id}                                                                         |
| /api/articles/{id}              | Articles     | PUT       | Updates article with id {id}                                                                         |
| /api/articles                   | Articles     | POST      | Creates a new article                                                                                |
| /api/tags/all                   | Tags         | GET       | Gets all tags                                                                                        |
| /api/tags/edit                  | Tags         | PUT       | Updates a tag                                                                                        |
| /api/tags/new                   | Tags         | POST      | Creates a new tag                                                                                    |
| /api/tags/delete/{id}           | Tags         | DELETE    | Deletes a tag                                                                                        |
| /api/tags/new_assignment        | TagsAssigned | POST      | Creates a new tag assignment                                                                         |
| /api/tags/all_assigned          | TagsAssigned | GET       | Gets all assigned tags                                                                               |
| /api/tags/all_assigned/aid/{id} | TagsAssigned | GET       | Gets all assigned tags for article with {id}                                                         |
| /api/tags/all_assigned/tid/{id} | TagsAssigned | GET       | Gets all assigned articles for tag with {id}                                                         |
| /api/tags/edit_assignment       | TagsAssigned | PUT       | Updates a tag assignment                                                                             |
| /api/tags/delete_assignment     | TagsAssigned | DELETE    | Deletes a tag assignment                                                                             |
