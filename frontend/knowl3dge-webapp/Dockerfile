FROM node:14.18.1-alpine AS builder
COPY . ./knowl3dge-webapp
WORKDIR /knowl3dge-webapp
RUN npm i
RUN $(npm bin)/ng build

FROM nginx:1.15.8-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /knowl3dge-webapp/dist/knowl3dge-webapp/ /usr/share/nginx/html
