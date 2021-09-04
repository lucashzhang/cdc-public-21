# cdc-public-21
This is the repository for the 2021 Carolina Data Challenge public site.

It includes the source code for the ReactJS frontend site as well as the Strapi backend content management system.

## Software Requirements & Tech Stack
[**Docker**](https://www.docker.com/): This app was built using Docker Containers. So, this is the only real requirement for the app. **Docker needs to already be installed on the computer for this to work**.

Docker Images used:
- [strapi/strapi](https://hub.docker.com/r/strapi/strapi): this image automatically sets up the backend strapi server in a docker container
- [node](https://hub.docker.com/_/node): this image is used in development to handle the react app as well as to create the production build through npm run build
- [nginx](https://hub.docker.com/_/nginx): this image is used to host the ReactJS application in production mode
- [jwilder/nginx-proxy](https://hub.docker.com/r/jwilder/nginx-proxy): this image is used to setup the reverse proxy to deal with serving the backend and frontend together safely

[**ReactJS**](https://reactjs.org/): ReactJS is a very popular framework developed by Facebook for recreating web applications. 

Additional JavaScript libraries used:
- [Framer/Motion](https://www.framer.com/motion/): Useful and performative JavaScript Animation Library
- [Node-sass](https://sass-lang.com/): For easier styling. I personally dislike using CSS frameworks, but I still appreciate things that make CSS easier

[**Strapi**](https://strapi.io/): Strapi is NodeJS content management system. We are using it so that all directors can update site content with the minimum computer science knowledge. That way changes and new configurations can be made to the site as quickly as possible.

## Setting up a Development Environment
Go to the top most directory of the project (the one where the docker-compose.yml file resides) and run the following command:
```
docker-compose up -d
```
To rebuild any images run:
```
docker-compose up -d --build
```
To shut it all down run:
```
docker-compose down
```

## Building the Production Environment
Go to the top most directory of the project (the one where the docker-compose.yml file resides) and run the following command:
```
docker-compose -f docker-compose-prod.yml up -d --build
```
To shut it all down run:
```
docker-compose -f docker-compose-prod.yml down
```

#### If it doesn't work in Digital Ocean (Error 137), try:
https://www.digitalocean.com/community/questions/npm-gets-killed-no-matter-what

