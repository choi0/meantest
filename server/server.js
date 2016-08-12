/**
 * Created by Danny Choi on 8/11/2016.
 */



var express = require('express');
var fs = require('fs');
var mysql = require('mysql');
var http = require('http');
var https = require('https');
var ipfilter = require('express-ipfilter');
var path = require('path');
var config = require('./config.js');

var app = express();

var ips = [['10.137.0.0/16','127.0.0.1']];
app.use(ipfilter(ips, {mode: 'allow'}));

var server = http.createServer(app);

/*
 var connection = mysql.createConnection({
 host: 'localhost',
 user: 'randy',
 password: 'qdjPhLpZsm5fvDJe',
 database: ''
 });
 */
app.use('/client',express.static('../client'));
app.use('/img',express.static('../client/img'));
app.use('/lib',express.static('../client/lib'));
app.use('/js',express.static('../client/js'));
app.use('/views',express.static('../client/views'));
app.use('/css',express.static('../client/css'));
app.use('/app.js',express.static('../client/app.js'));
app.use('/index.html',express.static('../client/index.html'));
app.use(function(req, res) {
    res.sendFile('../client/');
});
app.get('/',function(req,res){
    res.sendFile(path.resolve('../client/index.html'));
    console.log('running');
});

app.get('/testpage1', function (req, res) {
    res.send('welcome to test page 1');
});

server.listen(config.server.listenPort, '0.0.0.0', 511, function() {
    var open = require('open');
    //open('http://localhost:' + config.server.listenPort + '/');
});
console.log('Angular App Server - listening on port: ' + config.server.listenPort);
