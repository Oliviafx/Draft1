'use strict';

const yelp = require('yelp-fusion');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const clientId = 'USLc4bO1jd_WNmHyMtyWeQ';
const clientSecret = 'CgmeETa6k6WbF82MNxaRuBU0rbTuILsTRic8nBcN5brSZdyUddRWKg2AC0Zuud9D';

var app = express();
var upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(8080);
console.log('App listening on port 8080');

var searchRequest = {
  location: 'london'
};


app.post('/search', upload.array(), function(req, res){
	console.log(req.body);
});


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
