# Test Plan - KNOWL3DGE


## Introduction

This testplan will outline the various methods used to test functionality within the KNOWL3DGE application, covering both the frontend and backend.
Some features or functionalities will be described more globally than others, due to the way they work or are set up.

## Features

### Frontend

Functions that do not rely upon data from the database, but that do perform important tasks will be tested via the unit tests built into Angular. An example of this would be `shorten(input: string)` which can be found in the `ArticleCardComponent`. This function shortens the description text if it is longer than 150 characters and trims any trailing whitespaces. It will be tested by means of unit test, which will feed a string of text into it and compare the output with what is to be expected.

Functions that *do* require the database connection (or, more accurately, the backend connection) to work will be tested by means of a fake backend, probably also integrated into the Angular unit tests. This is possible thanks to dependency injection, where I can substitute the HTTP requests to the backend with something that just returns the expected value. As such, I do not have to reset the database for testing purposes.

Visual things, such as the UI, will mostly have to be tested by hand and/or using a testing framework like Selenium or Cypress.

### Backend

Just like with the frontend, functions that do not rely specifically on the database can be tested using unit tests and mocking whatever they depend on.
The backend as a whole (with a mocked/auto-resetting database) will eventually be tested with integration tests.

The connection with the database is automatically tested upon running the application by means of the `contextLoads()` test that was already provided. Without a connection, it will not run the application.

## Quality assurrance

The tests will be ran in the CI/CD pipeline (where possible) and will impact the outcome of the pipeline job. Furthermore, SonarQube requires 80% of code to be covered by unit tests as a way to ensure quality.