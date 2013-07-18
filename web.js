var express = require('express');
var fs =require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    
    fs.readFile('./index.html', 'utf8', function read(err, data) {
        if (err) {
            return console.log(err);
        }
        response.send(data);
  });

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
