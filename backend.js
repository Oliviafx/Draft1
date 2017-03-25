'use strict';

const YELP = require('node-yelp-fusion');

var yelp = new YELP({id:USLc4bO1jd_WNmHyMtyWeQ, secret:CgmeETa6k6WbF82MNxaRuBU0rbTuILsTRic8nBcN5brSZdyUddRWKg2AC0Zuud9D});

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
