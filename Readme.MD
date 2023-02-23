# Node Unique IDS Take Home Test

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/)


# Getting started
- Install dependencies
```
npm install
```
- Build and run the project
```
npm start
```
  Navigate to `http://localhost:3000`


If you want to run migrations execute:
```
npx sequelize-cli db:migrate
```

# Requirements 

## Identity Service
In this project, you'll be asked to build a RESTful API using Node.js, Express, and Sequelize, and follow a TDD-based architecture. The API will be used to manage a to-do list, which means you'll need to implement a series of routes that allow users to create, read, update, and delete todos.

## Task

The application must be written in Node.js using the Express framework.
The database must be created in SQLite, using Sequelize to interact with the database.
The application must follow a TDD-based architecture, using the Jest and Supertest libraries.
The application must be configured to run in a Docker container.
The application must expose a RESTful API that allows users to create, read, update, and delete to-dos.
Your app should include extensive unit and integration tests for all features and paths.
functionalities
The application must implement the following functionalities:

 
- Create a new todo: Users must be able to send a POST request that includes the title and description of the todo to be created. The app should return the newly created todo.
- Get a list of todos: Users must be able to send a GET request that returns a list of all pending todos.
- Get a specific todo: Users must be able to send a GET request that returns a specific todo based on its ID.
- Update a todo: Users must be able to send a PUT request that includes the ID of the todo to update and any other fields that need to be updated (eg title, - description, status). The application should return the updated todo.
- Delete a todo: Users must be able to send a DELETE request that includes the ID of the todo to be deleted. The application should return a message confirming that the todo has been deleted.
## Project Structure
The some of the folders that you will find are:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **node_modules**         | Contains all  npm dependencies                                                            |
| **deploye**              | Contains Docker stuff                                                          |
| **config**               | Application configuration for logs purposes, and sequelize database details
| **controllers**          | Controllers define functions to serve express routes. 
| **routes**               | Contains express route that performs some actions before calling the controller              
| **validator**            | Contains some validator using express-validation to check that the request body/param is as expected |
| **models**               | Contains Todo model and sequelize index file |
| **migrations**           | Contains some initial commands to create tables in the database |
| index.js                 | Entry point to express app                                                               |
| package.json             | Contains npm dependencies as well as build scripts.

## Building the project

### Running the build
All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.

| Npm Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`                   | Runs full build and runs node on index.js. Can be invoked with `npm start`                  |
| `dev`                     | Runs full build before starting all watch todos using nodemon. Can be invoked with `npm run dev`                                         |
| `test`                    | Runs build and run tests using jest. Can be invoked with `npm run test`        |

## Testing
The tests are  written in Jest. This tests are located in src/test folder.

```
  "jest": "^29.4.2",
```

After running tests, a /coverage folder will be created with some info about the results.

## Logs
This project use winston to create logs of API calls and specially errors. They will be stored at /log folder that will be automatically created when the project runs for the first time.
It will also separate logs by days of month.


## Author
José Alberto Vázquez López
@JoseAlbertoVazq

