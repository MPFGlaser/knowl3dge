# KNOWL3DGE UX Feedback Report

## Introduction

In this report I will document the feedback gained by having a handful of people coming from different demographics, both technical and non-technical, use the application. The explanation they were given is that KNOWL3DGE is a website where you can browse and favourite articles once you are logged in/have registered for an account. All observations were recorded and only if absolutely necessary were they given any guidance.

## Test subjects

### General observations

#### Login

- Pressing enter while any field is selected should submit the form

#### Nav bar

- Login/register/logout button shifts downwards on clicking them if the page has been scrolled down. It does not activate immediately either when it shifts, but does when it is on its intended position.

### Psychologist, woman, 25 years old

#### Registration

- A hint should be shown if the password does not match the requirements. Currently only a red outline is shown.

#### Articles

- Clicking the body of the article should redirect to the article page, just like clicking the title or learn more button does.
- It is not clear that the tags shown with the article are just tags, not filters. They look like buttons -> make them look more like tags.

#### Nav bar

- Clicking the username should redirect to the profile page.

#### Favouriting

- The process of favouriting an article seems clear.

### Philosophy student, woman, 22 years old

#### Articles

- When not loading because the user is not logged in, it should show a message informing the user instead of an infinite loading spinner.
- When no articles are found matching the given filters, a message should be shown informing the user instead of an infinite loading spinner.

#### Registration

- After a successful registration, the user should be redirected (to home or their previous page) just like when logging in.
- If something goes wrong, like the backend being down or one of the criteria not being matched, the user should be given more specific information than "something went wrong". 
- The snackbar alone providing the error might not grab enough attention.

#### Favouriting

- The process of favouriting an article seems clear.

#### Article editing

- Should be auth-gated for non-admin users, causes confusion right now. -> hide edit button if user is not admin, show error message if non-admin still tries to access it.

#### Filtering

- Show message when no articles are found matching the filters
- Specify or add toggle for filtering mode (AND/OR).

#### Article tags (on cards)

- Should not highlight on click, as this causes users to think it is a button while it does nothing.
- The distinction is not clear, they look the same as the filtering buttons.

#### Login component

- The registration mode toggle is handy. Nice that it retains user input when switching modes.
- Show a label and/or snackbar with the reason the login attempt failed.

### Hypnotherapist, woman, 51 years old

#### Registration

- Password requirements should be shown to the user, especially if the given password does not pass them. -> maybe an interactive password strength bar?
- Successful registration should redirect to previous page or home page.

#### Favouriting

- The process of favouriting an article seems clear.

#### Articles

- The list of articles should be cleared upon logout, as logged out users are currently not allowed to see them.

#### Login

- Give the user more information on what went wrong, e.g. server error or incorrect credentials.

### Software engineering student, man, 22 years old

#### Articles

- Should show that login is necessary to view articles
- Add article button should not be shown to unauthorised users
- Edit article button should not be shown to unauthorised users

#### Login

- The switch for registration mode is a nice addition
- Works fine, as expected

#### Article editing

- Remove the debug field for entering the author userId. This should be handled in the backend by decoding the JWT
- Show an error message if something goes wrong for any reason
- Redirect to previous page after editing the article succesfully
- Do not allow the user to see the page when they are not authorised.

#### Registration

- Should check if passwords match before submitting the form. -> still submits if passwords do not match
- Should redirect after succesful registration
- Show if username is taken or not, preferably in real-time.

#### Logout

- Works fine, as expected.

#### Article filtering

- Should show a message if no matching articles are found instead of an infinite loading spinner.

### Housekeeper, woman, 58 years old

#### Registration

- Redirect would be nice
- Maybe some more guidance (e.g. help button, hints) for registering in case the user finds it difficult

#### Favouriting

- Seems clear

#### Editing articles

- Needs to be auth-walled

#### Filtering

- Needs to show if nothing is found
- Needs to be AND instead of OR

### Software developer, man, 19 years old

#### Nav-bar

- Use router links instead of hrefs so page is not reloaded

#### Articles

- Add article button is shown when not authorised, should be hidden
- Should show message as to why articles cannot be loaded (auth, filtering, server error, etc)

#### Login/registration

- Current setup of the toggle is an anti-pattern, it should be a button redirecting to the registration page, with the registration page having a button redirecting to the login page
- Login form can submit without a password
- Login button should be on the left instead of the right? -> investigate

#### Article editor

- URL pattern is incorrect, should be /article/:id/edit instead of /article/edit/:id

#### 404 page

- Is shown on auth (403) errors as well, that should not be happening of course.