// ============= Dependencies ===================
var express= require('express');
var bodyParser= require('body-parser');
var path= require('path');
var friends= require ('./app/data/friends')


// ===== Express App & Port variables w/ dataparser =====

var app =express();
var PORT= process.env.PORT || 8080;

// handles data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ================ Router ===================

require(__dirname + '/app/routes/apiRoutes')(app);
require(__dirname + '/app/routes/htmlRoutes')(app);

// This is to use the CSS style. Not sure why everything isn't showing up right.
app.use(express.static('public'))

// ============= Port Listener ==================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  
  

/* ============ Summary of imports and exports ===============

    Imports for server.js:
        package dependencies
        /app/data/friends.js
        /app/routing/apiRoutes.js

    Exports to express app: routes
        api routes: references friends array and handles pushing new friends into array
        html routes:  handles when users visit a page and shows html page of content (based on requests)

    Exports to api routes: 
        data/friends.js: stores the data from the friend array

    notes: 
        Path is required as a dependency.
        Observe how router requires __dirname + the path being exported.
        */