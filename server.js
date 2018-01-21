const express = require('express');
var bodyParser = require('body-parser');
var fetch = require('node-fetch');

const app = express();
// var jsonParser = bodyParser.json();

// app.use(bodyParser.json());
app.get('/', function(req, res){
   res.send('Hello World!');
})

app.listen(3000);

fetch('http://api.walmartlabs.com/v1/items?apiKey={INSERT_KEY_HERE}&upc=035000521019')
    .then(res => res.json())
    .then(res => {
    console.log(res.items[0].name)
    console.log(res.items[0].thumbnailImage)
});
