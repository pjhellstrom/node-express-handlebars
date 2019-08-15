# node-express-handlebars
Built on MySQL, Node, Express, Handlebars leveraging a custom ORM. The server routes a get request upon launch that populates data into a handlebars file from the database. A post request is routed to the REST api and saves a new entry in the database. Finally a put request will change the status of the items in the database/ REST api. CSS is done with Bulma.

### Requirements

* [Node.js](https://nodejs.org/) LTS (v10)

### Dependencies

* [express](https://www.npmjs.com/package/express)

* [mysql](https://www.npmjs.com/package/mysql)

* [Handlebars.js](https://www.npmjs.com/package/handlebars)

* [ORM](https://www.npmjs.com/package/orm)

### Launch

The application has been deployed on [Heroku](https://mighty-ridge-71527.herokuapp.com/)

To run locally, download the repo into a new directory run use the npm i command to install dependencies:

```console
# Install dependencies
$ npm i
```

Then start the server through node.js:
```console
# Initiate server
$ node server.js
```
#### Directory structure

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       └── css
│       │   └── style.css
│       └── js
│           └── app.js
│
├── server.js
│
└── views
    ├── index.handlebars
    ├── layouts
    │   └── main.handlebars
    └── partials
        └── burgers
            └── burger-block.handlebars
```
