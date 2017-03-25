'use strict';

const YELP = require('node-yelp-fusion');
const clientId = 'USLc4bO1jd_WNmHyMtyWeQ';
const clientSecret = 'CgmeETa6k6WbF82MNxaRuBU0rbTuILsTRic8nBcN5brSZdyUddRWKg2AC0Zuud9D';

var yelp = new YELP({id:USLc4bO1jd_WNmHyMtyWeQ, secret:CgmeETa6k6WbF82MNxaRuBU0rbTuILsTRic8nBcN5brSZdyUddRWKg2AC0Zuud9D});

const token = YELP.accessToken(clientId, clientSecret).then(response => {
  console.log(response.jsonBody.access_token);
}).catch(e => {
  console.log(e);
});


yelp.search("term=Biryani&location=New York")
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
