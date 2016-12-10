'use strict'

var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/webhook', function (req, res) {
    res.sendStatus(200);
});

app.get('/webhook', function (req, res) {
    res.sendStatus(200);
});


app.listen(process.env.PORT || 8080);
