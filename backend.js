'use strict';

const qs = require('query-string');
const express = require('express');
var bodyParser = require('body-parser');
const ejs = require('ejs');
//yelp constants
const yelp = require('yelp-fusion');
const clientId = 'USLc4bO1jd_WNmHyMtyWeQ';
const clientSecret = 'CgmeETa6k6WbF82MNxaRuBU0rbTuILsTRic8nBcN5brSZdyUddRWKg2AC0Zuud9D';


var app = express();
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname );
app.set('view engine', 'html');

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname));

app.post('/', urlencodedParser, function(req, res){
	console.log(req.body);

yelp.accessToken(clientId, clientSecret).then(response => {
    const client = yelp.client(response.jsonBody.access_token);
  
  client.search(req.body).then(response => {
     const firstResult = response.jsonBody.businesses[0];
     console.log(firstResult);
     const prettyJson = JSON.stringify(firstResult, null, 4);
     

     var obj = JSON.parse(prettyJson);
     var url = obj.img_url;
     var info = {src: url, name: obj.name, price: obj.price, rating: obj.rating, review_count: obj.review_count, distance: obj.distance, latitude: obj.coordinates.latitude, longitude: obj.coordinates.longitude}

     console.log(info.name);

     res.render('index', {data: info});
	}).catch(e => {
  		console.log(e);
	});

	});

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});