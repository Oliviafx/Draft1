'use strict';

const yelp = require('yelp-fusion');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const clientId = 'USLc4bO1jd_WNmHyMtyWeQ';
const clientSecret = 'CgmeETa6k6WbF82MNxaRuBU0rbTuILsTRic8nBcN5brSZdyUddRWKg2AC0Zuud9D';

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.listen(8080);
console.log('App listening on port 8080');

var searchRequest = {
  location: 'london'
};

var searchTypeEnum = {
  SEARCH: "search",
  PHONE: "phone",
  TRANSACTION: "transaction",
  BUSINESS: "business",
  REVIEWS: "reviews",
  AUTOCOMPLETE: "autocomplete"
}


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

