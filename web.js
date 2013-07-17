var express = require('express');
var fs =require('fs');
var infile = "index.html";
var data = new Buffer(1024);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    
    var i=1;
    for(i=1; i< 2; i++) {
	data = fs.readFileSync(infile);
	response.send(data.toString('utf8',0,1024));
    }
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});




