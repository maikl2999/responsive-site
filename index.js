var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/index.html');
  });

app.listen(process.env.PORT || 3000, function () {

  console.log('Start server on port 3000!');
});