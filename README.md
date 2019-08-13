# node-express-handlebars
Built on MySQL, Node, Express, Handlebars and an ORM

### Requirements

* [Node.js](https://nodejs.org/) LTS (v10)

### Dependencies

* [express](https://www.npmjs.com/package/express)

* [mysql](https://www.npmjs.com/package/mysql)

* [Handlebars.js](https://www.npmjs.com/package/handlebars)

* [Object Relational Mapping](https://www.npmjs.com/package/orm)

### Launch

The application will been deployed on Heroku.

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
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
├── index.handlebars
└── layouts
└── main.handlebars
```
