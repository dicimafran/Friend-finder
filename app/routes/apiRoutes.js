/* =========== Table of Contents  ===============

    dependencies- directory where executing script resides + path to friends.js

    module.exports- exports api to express instance for use  in server.js
        
    app.get- at the path api/friends, return data from the data directory's friends.js file as JSON format.
        
    app.post
        bestMatch object holds data for best match after matching to send back to survey.html
        newFriend object holds new friend format to push into the JSON
        post content is reliant on comparison between friends.js JSON and newFriend
            Best possible match score is 50 because max score for each of the 10 questions is 5.
            loop through the friends.js JSON

    ========================================= */

var friends = require('../data/friends');

module.exports = function (app) {
    
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {

        var bestMatch = {
            name: '',
            photo: '',
            matchScore: 50
        };

        var totalDifference = 0;

        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: req.body['scores[]']
        }

        friends.push(newFriend);

        for (var i = 0; i < (friends.length-1) ;i++) {
            totalDifference = 0;
  
            for (var j = 0; j < friends[i].scores.length; j++){
                totalDifference += Math.abs(friends[i].scores[j] - newFriend.scores[j])
                }
            if (totalDifference<=bestMatch.matchScore){
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.matchScore = totalDifference;
                }
        }

        res.json(bestMatch);

    });
}
    /* ===================== Comparison ================== 

Comparison shall be based on difference from 0. 
         The math didn't turn out right with ( (bestMatchScores + newFriendScores) - (newFriendScores) )
         I decided to put the 100 in directly.

        I wanna see if I can make the logic for this code in a more different manner by reducing the arrays.
        
        for (var i = 0; i < (friends.length - 1); i++) {

            const accumulate = function (accumulator, currentValue) {
                return accumulator + currentValue
            };

            for (var j = 0; j < friends[i].scores.length; j++) {
                var friendsListScores = parseInt(friends[i].scores[j].length.reduce(accumulate));
                var newFriendScore = parseInt(newFriend.scores[j].reduce(accumulate));
                var matching= (friendsListScores + newFriendScore);
                var totalDifference = (100 - matching);
                console.log(totalDifference)
            }
           
        };

===================================================== */

