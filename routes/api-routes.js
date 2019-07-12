// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    app.post("/api/burger", function(req,res){
        db.Post.create({
            name:req.body.name,
            devoured: req.body.devoured
        }).then(function(data){res.json(data)})
    })
    
    app.get("/api/list",function(req,res){
        db.Post.findAll({}).then(function(data){res.json(data)})
    })
 
};
