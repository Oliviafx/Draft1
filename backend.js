'use strict';

const yelp = require('yelp-fusion');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const jsdom = require('jsdom');

const clientId = 'USLc4bO1jd_WNmHyMtyWeQ';
const clientSecret = 'CgmeETa6k6WbF82MNxaRuBU0rbTuILsTRic8nBcN5brSZdyUddRWKg2AC0Zuud9D';

var app = express();
var upload = multer();

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var htmlSource = fs.readFileSync("search.html", "utf8");

function call_jsdom(source, callback) {
    jsdom.env(
        source,
        [ 'jquery-1.7.1.min.js' ],
        function(errors, window) {
            process.nextTick(
                function () {
                    if (errors) {
                        throw new Error("There were errors: "+errors);
                    }
                    callback(window);
                }
            );
        }
    );
}


app.post('/search', upload.array(), function(req, res){

	console.log(req.body);

	yelp.accessToken(clientId, clientSecret).then(response => {
  const client = yelp.client(response.jsonBody.access_token);
  client.search(req.body).then(response => {
    const firstResult = response.jsonBody.businesses[0];
    const prettyJson = JSON.stringify(firstResult, null, 4);
    console.log(prettyJson);
    //document.getElementById("textresults").innerHTML = prettyJson;
    //res.writeHead(prettyJson, {'Content-Type': 'text/html'});/

    call_jsdom(htmlSource, function(window){
    	var $ = window.$;
    	$("h2").text(prettyJson.text());
    	//console.log(documentToSource(window.document));
    });
  });
}).catch(e => {
  console.log(e);
});

});



app.listen(8080);
console.log('App listening on port 8080');



