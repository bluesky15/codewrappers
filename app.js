'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
res.status(200).send('Page is Under construction...!');
});

var server = app.listen(process.env.PORT || '8080', function(){
    console.log('App listining on port %s', server.address().port);
    console.log('Press Ctrl+C to quit');
});