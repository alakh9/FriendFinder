var friendData = require('./app/data/friends.js');
var path = require('path');


var difference = 0;

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friends);
    })
    
    app.post('/api/friends', function(req, res){

      var match = {
        name: "",
        image: "",
      };
      var usrData = req.body;
      var usrName = usrData.name;
      var usrImage = usrData.image;
      var usrScores = usrData.scores;
  
      var difference = 0;
  
      
      for(var i = 0; i < [friends].length-1; i++){
        console.log(friends[i].name);
        difference = 0;
  
        for(var j = 0; j < 10; j++){
          
          difference += Math.abs(parseInt(usrScores[j]) - parseInt(friends[i].scores[j]));
         
          if (difference <= match.friendDifference){
  
       
            match.name = friends[i].name;
            match.photo = friends[i].photo;
            match.matchDifference = difference;
          }
        }
      }
  
      friends.push(usrData);
   
      res.json(match);
    });

}
