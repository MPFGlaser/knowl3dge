# Notes on CI/CD Sprint 5

Currently an image is produced of both the backend and frontend when the publish job is ran in the CI/CD pipeline. (only on branch master)  
There is a live version running on https://knowl3dge.mpfglaser.nl but at the moment I am still having some problems with the SSL certificate for the backend. This will be resolved in sprint 6.
Images are published on Docker Hub.  
[frontend image](https://hub.docker.com/repository/docker/mpfglaser/knowl3dge-webapp)  
[backend image](https://hub.docker.com/repository/docker/mpfglaser/knowl3dge-backend)