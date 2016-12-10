'use strict'

var express = require('express');
var app = express();
var path = require('path');
var config = require('./config/default.js');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/webhook', function (req, res) {
    if (req.query['hub.verify_token'] === config.pageAccessToken) {
      res.send(req.query['hub.challenge']);
    } else {
      res.send('Error, wrong validation token');    
    }
});

app.listen(process.env.PORT || 8080);
