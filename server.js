var express = require('express');
var http = require('http');
var fs = require('fs');

var app = express();

var port = process.env.PORT || 3000;



app.get('/', function (req, res) {
    res.json({
        msg: "Hola, you are in the wrong place. Type a name after localhost:3000/!"
    });
});

app.route('/:name')

  .post(function (req, res) {
    var data = "Here is your name in the file: " + req.params.name;
    fs.writeFile('output/name.json', JSON.stringify(data));
    res.send("Writing your name " + req.params.name + " to file ouput/name.json");
})

  .get(function (req, res) {
      var readFile = fs.readFileSync('output/name.json', 'utF8');
      var fileContents = JSON.parse(readFile);
      res.json(fileContents);
});


app.listen(port);
console.log("Everything is at: " + port);
