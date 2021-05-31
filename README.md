# cdc-public-21
This is the repository for the 2021 Carolina Data Challenge public site.

It includes the source code for the ReactJS frontend site as well as the Strapi backend content management system.

## Software Requirements & Tech Stack
**Docker**: This app was built using Docker Containers. So, Docker needs to already be installed on the computer to keep setup to a minimum.

**ReactJS**: ReactJS is a very popular framework developed by Facebook for recreating web applications. 

Additionally, the JavaScript libraries that I used are:
- TBD

**Strapi**: Strapi is NodeJS content management system. We are using it so that all directors can update site content with the minimum computer science knowledge. That way changes and new configurations can be made to the site as quickly as possible.

## Setting up a Development Environment
Go to the top most directory of the project (the one where the docker-compose.yaml file resides) and run the following command:
```
docker compose up -d
```
To rebuild any images run:
```
docker compose up -d --build
```

## Building the Production Environment
Go to the top most directory of the project (the one where the docker-compose.yaml file resides) and run the following command:
```
docker compose -f docker-compose-prod.yaml up -d --build
```
