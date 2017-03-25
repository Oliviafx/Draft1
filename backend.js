'use strict';

const yelp = require('node-yelp-fusion');
const clientId = 'USLc4bO1jd_WNmHyMtyWeQ';
const clientSecret = 'CgmeETa6k6WbF82MNxaRuBU0rbTuILsTRic8nBcN5brSZdyUddRWKg2AC0Zuud9D';

const token = yelp.accessToken(clientId, clientSecret).then(response => {
  console.log(response.jsonBody.access_token);
}).catch(e => {
  console.log(e);
});

const client = yelp.client(token);

client.search("term=Biryani&location=New York")
  .then(function(result){
           res.json(result);
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
