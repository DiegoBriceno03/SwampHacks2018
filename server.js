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
  console.log('Successfully uplodaded');
});

app.get('/*', function(req, res){
   res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);

fetch('http://api.walmartlabs.com/v1/items?apiKey={Key}&upc='+x)
    .then(res => res.json())
    .then(res => {
    console.log(res.items[0].name)
    console.log(res.items[0].thumbnailImage)
});
