# KNOWL3DGE Security Report based on OWASP Top 10

## Introduction

This report will look at the various security issues found in the OWASP Top 10 and how they relate (or do not relate) to the KNOWL3DGE application.  

## OWASP Top 10

### A01:2021-Broken Access Control

In its current state, only the `/login`, `/user`, and `/user/getuserid/{username}` endpoints are accessible without authentication. All other endpoints require the user to be logged in (thus sending along the JWT in the authorization header). At this moment, I would not consider it a security issue yet, but when I get around to opening up the application so that, for instance, articles can be loaded without authentication, I will make sure that authorisation is handles by means of a whitelist as opposed to a blacklist. This ensures that even if I forget to explicitly secure an endpoint, it will not pose a security risk as the default would be that access is only allowed for admin users.

### A02:2021-Cryptographic Failures

At this moment in time, JWT tokens are signed using a system-wide secret key that is, unfortunately, stored in a file visible in version control. This means that if access is gained to the file, the system can be compromised.
Preparations are already in place to update this system to use a unique secret for every user, stored in the database. This will also allow for the ability to have users log out of the application on all devices by means of changing the key present in their database entry, invalidating all their JWTs.

### A03:2021-Injection

While not all user data is validated yet, all interaction with the database is done using an ORM (Object Relational Mapper). As such, the most obvious forms of injection are nipped in the bud, as the data is sanitised before the command is executed. Ideally, all data would be validated before it is even passed to the ORM in the first place.

### A04:2021-Insecure Design

When looking at [the given examples](https://owasp.org/Top10/A04_2021-Insecure_Design/) I cannot immediately identify any matching cases in the KNOWL3DGE software. However, one thing that can definitely use some improvement is the way data is sent back to the client. Currently the data is sent back as-is, meaning I simply sent back whatever is contained in the model. A safer approach would be to make use of request and response objects. These only contain the necessary data and as such won't be able to leak any sensitive information. 

### A05:2021-Security Misconfiguration

I have tried my best to keep all used dependencies as up to date as possible. Unfortunately, NPM still reports that some dependencies have vulnerabilities. These dependencies are however used by Angular, and in its current state, are not something I can update to the best of my belief.  
When the application encounters an error, it currently still sends a full stack trace to the client. This can and possibly will be resolved in the future by means of adding custom exceptions.  
As far as I am aware, no unnecessary dependencie are being used at this moment in time.

### A06:2021-Vulnerable and Outdated Components

Dependencies are kept as up to date as possible to prevent this vulnerability. However, since this is a one man project, I obviously cannot keep up to the standards that bigger teams use or should be using.

### A07:2021-Identification and Authentication Failures

At the moment of writing, no measures are in place to prevent automated attacks where credentials are entered into the application. (credential stuffing). Furthermore, because the application (currently) does not have any recovery process for accounts, it is possible that the user will be locked out of the application. This is a double-edged sword, as no attacks are possible by means of guessing so-called "knowledge-based answers" (e.g. "What is the name of your first pet?"), but at the same time, a user is not able to change their password in case it is leaked elsewhere.  
Passwords are, however, encrypted using a tried and tested hashing algorithm alongside the use of a unique salt for every user. This means that even if the password is leaked, the user will not be able to log in with it and the use of rainbow tables is not a viable option.

### A08:2021-Software and Data Integrity Failures

My security obviously does not come close to what big project (should) be using. However, as far as access to the pipelines and source code is considered, it can only be accessed by my teachers and myself. Dependencies are pulled from centrally hosted repositories (that being the official ones in my case), which could be a vulnerability, but in this case I doubt it would be too big of an issue.
The planning board in JIRA is unfortunately also accessible to the members of my group project due to the way the free plan works. While unfortunate, it is something I'll have to live with for now and isn't something I can solve unless I invest heavily in the project by getting a paid plan for JIRA among other things.

### A09:2021-Security Logging and Monitoring Failures

At this moment in time nothing is permanently logged in the application. As such I cannot say for sure if anyone has tried to (maliciously) access the application in any way, and any operations or transactions cannot be traced back to the user at this point in time. Again, considering the size of the application and the development team behind it, this is to be expected. It is however quite confronting to see and read about this.

### A10:2021-Server-Side Request Forgery

To prevent SSRF, nothing is currently in place. This is a definite point of attention if and when the application hypothetically grows in size, becoming a more lucrative target for potential attackers.