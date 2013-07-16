var express = require('express');
var fs =require('fs');
var app = express.createServer(express.logger());
var infile = "index.html";
var data = new Buffer(14);


app.get('/', function(request, response) {
  
    data = fs.readFileSync(infile);
    
   response.send(data.toString('utf8', 0, 14));



var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});



