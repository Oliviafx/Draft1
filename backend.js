'use strict';

const yelp = require('yelp-fusion');
const clientId = 'USLc4bO1jd_WNmHyMtyWeQ';
const clientSecret = 'CgmeETa6k6WbF82MNxaRuBU0rbTuILsTRic8nBcN5brSZdyUddRWKg2AC0Zuud9D';

const searchRequest = {
  location: 'london'
};

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

