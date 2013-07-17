var express = require('express');
var fs =require('fs');
var infile = "index.html";
var content;
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    
    fs.readFile('./Index.html', function read(err, data) {
        if (err) {
            throw err;
        }
        content = data;
    });
    response.send(data.toString('utf8')); // console.log(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});




var content;
    fs.readFile('./Index.html', function read(err, data) {
        if (err) {
            throw err;
        }
        content = data;
    });
    console.log(content);
