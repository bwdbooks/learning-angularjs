var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use('/', express.static('./'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var user = {
             first: 'Christopher',
             last: 'Columbus',
             username: 'cc1492',             
             title: 'Admiral',
             home: 'Genoa'
           };
var data = [];
function r(min, max){
  var n = Math.floor(Math.random() * (max - min + 1)) + min;
  if (n<10){ return '0' + n; }
  else { return n; }
}
function p(start, end, total, current){
  return Math.floor((end-start)*(current/total)) + start;
}
function d(plusDays){
  var start = new Date(1492, 7, 3);
  var current = new Date(1492, 7, 3);
  current.setDate(start.getDate()+plusDays);
  return current.toDateString();
}
function makeData(){
  var t = 70;
  for (var x=0; x < t; x++){    
    var entry = {
      day: d(x),
      time: r(0, 23) + ':' + r(0, 59),
      longitude: p(37, 25, t, x) + '\u00B0 '+ r(0,59) + ' N',
      latitude: p(6, 77, t, x) + '\u00B0 '+ r(0,59) + ' W'
    };
    data.push(entry);
  }  
}
makeData();
app.get('/get/user', function(req, res){
  res.json(user);
});
app.get('/get/data', function(req, res){
  res.json(data);
});
app.post('/set/user', function(req, res){
  console.log(req.body.userData);
  user = req.body.userData;
  res.json({ data: user, status: "User Updated." });
});
app.post('/set/data', function(req, res){
  data = req.body.data;
  res.json({ data: data, status: "Data Updated." });
});
app.listen(80);