'use strict';

const yelp = require('yelp-fusion');
const clientId = 'USLc4bO1jd_WNmHyMtyWeQ';
const clientSecret = 'CgmeETa6k6WbF82MNxaRuBU0rbTuILsTRic8nBcN5brSZdyUddRWKg2AC0Zuud9D';

const token = yelp.accessToken(USLc4bO1jd_WNmHyMtyWeQ, CgmeETa6k6WbF82MNxaRuBU0rbTuILsTRic8nBcN5brSZdyUddRWKg2AC0Zuud9D).then(response => {
  console.log(response.jsonBody.access_token);
}).catch(e => {
  console.log(e);
});

const client = yelp.client(token);

client.search({
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
}).then(response => {
  console.log(response.jsonBody.businesses[0].name);
}).catch(e => {
  console.log(e);
});
/*
//dont delete yet
const clientId = 'USLc4bO1jd_WNmHyMtyWeQ';
const clientSecret = 'CgmeETa6k6WbF82MNxaRuBU0rbTuILsTRic8nBcN5brSZdyUddRWKg2AC0Zuud9D';

const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};
*/
