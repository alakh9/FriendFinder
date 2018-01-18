var friendData = require('../data/friends.js');
var path = require('path');


var totalDifference = 0;

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friends);
    })
    
    app.post('/api/friends', function(req, res){



    });





}    
