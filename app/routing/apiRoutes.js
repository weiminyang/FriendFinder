var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friendlist", function(req, res) {
        res.json(friends);
      });
    
      app.post("/api/friendlist", function(req, res) {
        
        
        var abs=0;
        var temp=0;
        var friendliness=1000;
        var index=0;
        for(var i=0;i<friends.length;i++){
          for(var j=0;j<friends[i].length;j++){
            
            abs=math.abs(parseInt(req.body.scores[j])-parseInt(friends[i].scores[j]));
            temp=temp+abs;
          }
          if(temp<=friendliness){
            friendliness=temp;
            index=i;
          }
          temp=0;
        }
        friends.push(req.body);
          res.json(friends[index]);
       
          
      });

    }