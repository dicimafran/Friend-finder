// ============= Dependencies ===================
var express= require('express');
var bodyParser= require('body-parser');
var path= require('path');


// ===== Express App & Port variables w/ dataparser =====

var app =express();
var PORT= process.env.PORT || 8080;

// For some reason, I had errors when bodyparser extended was true
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ================ Router ===================

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

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
*/