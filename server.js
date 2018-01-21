const express = require('express');
var bodyParser = require('body-parser');
var fetch = require('node-fetch');
var path = require('path');

const app = express();
// var jsonParser = bodyParser.json();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/processForm', function(req, res){
  let x = req.body.first;
  // res.send('Successfully uplodaded');
  fetch('http://api.walmartlabs.com/v1/items?apiKey=KEY&upc='+x)
      .then(res => res.json())
      .then(res => {
      console.log(res.items[0].name)
      console.log(res.items[0].thumbnailImage)
  });
});

app.get('/processForm', function(req, res){
  var drink = [
    {name: res.items[0].name)}
  ]
});
app.get('/*', function(req, res){
   res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);
