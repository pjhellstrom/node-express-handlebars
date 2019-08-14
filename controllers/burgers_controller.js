// Import dependencies and model
const express = require('express');
const burger = require('../models/burger.js');

// Create router
const router = express.Router();

// Get route saves the object returned by the select statement to use in index.handlebars
router.get("/", function(req, res) {
    burger.select( (data) => {
        var hbsObject = { burgers: data };
        console.log(data);
        console.log('hbsObject: ', hbsObject);
        res.render('index', hbsObject);
    });
});

// Put route changes the status of the burger
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    
    console.log("condition", condition);
    console.log('req.body', req.body);
    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
    if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
    } else {
        res.status(200).end();
    }
    });
});

// Post route adds a burger
router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name"], [req.body.burger_name], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

// Export router
module.exports = router;