# NodeJS/React user management app

App allows you to add new users to the platform, edit their profile and also delete. Node API created using the expressJS framework, data stored in a MongoDB database. App which accesses the api created using React and Redux.

## Setup

There are a few dependencies to the app. [Docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/install/) are required to run the MongoDB database. The api runs on Node (v7.10.1 and NPM v5), the app runs best with [yarn](https://yarnpkg.com/en/docs/install)
Once the repo has been cloned run
```bash
$ docker-compose up -d
```
in the root directory run start up the docker image. Once that is done, run
```bash
$ cd api/
$ npm i
$ npm start
```
to start the api server on http://localhost:8000.
Once that is done open up a new terminal tab and navigate into the app directory and start the React app
```bash
$ cd app/
$ yarn install
$ yarn start
```
The React app will be running on http://localhost:3000

## TODOS

API: Admin authentication using jwt tokens. This will include new AdminController to handle routes for admin to login/logout and middleware to check jwt token which will be passed via headers.

APP: Better error handling in result of api network errors. Also app to work when refreshed on any page (either fetch user data if state is empty when navigated to new page, or reroute to "/")