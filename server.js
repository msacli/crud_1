var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var api = require('./routes/api');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api',api);

app.listen(3000, ()=>{
	console.log('listenin on port 3000');
});