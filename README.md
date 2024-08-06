# REST API with Node.js (Express) and PostgreSQL
## Overview
Building a RESTful API with Express and PostgreSQL database. 
## Requirements
### Node.js and npm
Make sure Node.js is installed. If not, see the installation instructions at the following link: https://nodejs.org/en. Run this command to check Node version:
```
$ node -v
$ npm -v
```
## Initial project
### Create new project
```
$ npm init
```
fill in the following questions (will generate package.json file):
```
name: (nodejs-api) Project Name
version: 0.0.1
description: The Project Description
entry point: //leave empty
test command: //leave empty
git repository: //the repositories url or empty
keywords: //leave empty
author: // your name
license: N/A
```
### Install Dependecies Extensions
#### Express.js
```
$ npm install express
```
#### Install PostreSQL extension
```
$ npm install pg
```
#### Install Nodemon
```
$ sudo npm install -g nodemon
```
#### Install dotenv
```
$ npm install --save dotenv
```
## Folder Structure
```
/nodejs-api/
├── config/
│   ├── db.config.js
├── controllers/
│   ├── webapi.controller.js
├── middleware/
│   ├── logging.midelware.js
├── models/
│   ├── combo.model.js
├── routes/
│   ├── webapi.route.js
├── services/
│   ├── db.service.js
│   ├── webapi.service.js
├── utils/
│   ├── helper.util.js
/index.js
/package.json
/.env
```
## Running application
```
$ nodemon npm start
```