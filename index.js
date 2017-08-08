// express web framework
var express = require('express');
var moment = require('moment-timezone');
var geoip = require('geoip-lite');
var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    var ipaddr = req.headers['x-real-ip'] 
        || req.headers['x-forwarded-for'] 
        || req.connection.remoteAddress;
    var geo = geoip.lookup(ipaddr);
    var data = geo===null
                ?{
                    server: moment().format(),
                    time: moment().format(),
                    timezone:'GMT+8',
                    ipaddr: ipaddr,
                    locate: '',
                    warn: 'We are not sure the information is right.'
                }
                :{
                    server: moment().format(),
                    time: moment().format(),
                    timezone:'GMT+8',
                    ipaddr: ipaddr,
                    locate: geo.city + ',' + geo.country + '  (' + geo.ll +')',
                    warn: ''
                }
    res.render('./pages/index', data);
});

app.listen(3000);
console.log('app is listening at localhost:3000...');