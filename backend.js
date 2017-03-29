'use strict';

const yelp = require('yelp-fusion');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const clientId = 'USLc4bO1jd_WNmHyMtyWeQ';
const clientSecret = 'CgmeETa6k6WbF82MNxaRuBU0rbTuILsTRic8nBcN5brSZdyUddRWKg2AC0Zuud9D';

var app = express();
var upload = multer();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));




var searchRequest = {
  location: 'london'
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + 'index.html'));
});

app.get('/search', function (req, res) {
  res.sendFile(path.join(__dirname + 'search.html'));
});

app.post('/search', upload.array(), function(req, res){
	res.send(req.body);
	console.log(req.body);
});


app.listen(8080);
console.log('App listening on port 8080');

/*
yelp.accessToken(clientId, clientSecret).then(response => {
  const client = yelp.client(response.jsonBody.access_token);
  client.search(searchRequest).then(response => {
    const firstResult = response.jsonBody.businesses[0];
    const prettyJson = JSON.stringify(firstResult, null, 4);
    console.log(prettyJson);
  });
}).catch(e => {
  console.log(e);
});
*/
