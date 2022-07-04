# nodejs-rest-api

[![Build Status](https://travis-ci.org/jaredpetersen/nodejs-api-template.svg?branch=master)](https://travis-ci.org/jaredpetersen/nodejs-api-template)

A simple example of a REST API for nodejs

## Endpoints
* `GET /tasks`: Lists all tasks
* `GET /task/:id`: Get particular task
* `POST /tasks`: Payload { name: string, message: string }
* `DEL /tasks/:id`: Delete task

## Usage
```
npm install
npm start
```
