var express = require('express');
var fs =require('fs');
var infile = "index.html";
var data = new Buffer(40);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    data = fs.readFileSync(infile);
    response.send(data.toString('utf8',0,40));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});




