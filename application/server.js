var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/barley');

var Schema = mongoose.Schema;

var BeerSchema = new Schema({
  name: String,
  style: String,
  image: String
});

mongoose.model('Beer', BeerSchema);

var Beer = mongoose.model('Beer');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.get('/', function(req, res){
  res.sendfile('/public/ageVerification.html')
});

app.get('/api/beers', function(req, res){
  Beer.find(function(err, docs){
    docs.forEach(function(item){
      console.log('Received a GET request for _id: ' + item._id);
    });
    res.send(docs);
  });
});

app.post('/api/beers', function(req, res){
  console.log('Received a POST request');
  for (var key in req.body) {
    console.log(key + ': ' + req.body[key]);
  }
  var beer = new Beer(req.body);
  beer.save(function(err, doc){
    res.send(doc);
  });
});

app.delete('/api/beers/:id', function(req, res){
  console.log('Received a DELETE request for _id: ' + req.params.id);
  Beer.remove({_id: req.params.id}, function(err){
    res.send({_id: req.params.id});
  });
});

app.put('/api/beers/:id', function(req, res){
  console.log('Received an UPDATE request for _id: ' + req.params.id);
  Beer.update({_id: req.params.id}, req.body, function(err){
    res.send({_id: req.params.id});
  });
});

var port = 3000;

app.listen(port);
console.log('server on ' + port);
