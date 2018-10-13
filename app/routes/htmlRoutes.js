var path = require('path');

module.exports = function (app) {

    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });
    
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });

};

/*======= HTML Route Notes ==============

html route dependencies: 
    path package needed to get correct file path for html
    exported as a module with GET requests for the instance of express that's running
 

Purpose of this html routing directory: handles when users visit a page and shows html page of content
    What's needed: 
        GET request with ('path', function (req, res)) {
            res.sendFile(path.join(__dirname, "../public/somepage.html"));
        }

What's going on:
    2 arguments are being passed in.
        1) A path to the directory name
        2) a function taking in requests and response from the user.

    When the user makes a GET request, the server takes the response and redirects the user to the appropriate html file.

*/