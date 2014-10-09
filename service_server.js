var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use('/', express.static('./'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
function initStore(){
  var items = ['eggs', 'toast', 'bacon', 'juice'];
  var storeObj = {};
  for (var itemIDX in items){
    storeObj[items[itemIDX]] = 
      Math.floor(Math.random() * 5 + 1);
  }
  return storeObj;
}
var storeItems = initStore();
app.get('/reset/data', function(req, res){
  storeItems = initStore();
  res.json(storeItems);
});
app.post('/buy/item', function(req, res){
  if (storeItems[req.body.item] > 0){
    storeItems[req.body.item] = 
      storeItems[req.body.item] - 1;
    res.json(storeItems);
  }else {
    res.json(400, { msg: 'Sorry ' + req.body.item + 
                         ' is out of stock.' });
  }
});
app.listen(80);