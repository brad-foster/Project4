var express = require('express');
var mongoose = require('mongoose');

mongoose

var app = express();

app.use(express.static(__dirname + '/public'));

var port = 3000;

app.listen(port);
console.log('server on ' + port);
