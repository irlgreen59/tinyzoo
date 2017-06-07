var express           = require('express'),
  app                 = express(),
  bodyParser          = require('body-parser'),
  mongoose            = require('mongoose'),
  tinyzoosController  = require('./server/controllers/tinyzoos-controller');

mongoose.connect('mongodb://localhost:27017/mean');

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});


app.use('/js', express.static(__dirname + '/client/js'));

app.get('/api/tinyzoos', tinyzoosController.list);
app.post('/api/tinyzoos', tinyzoosController.create);

app.listen(3000, function() {
  console.log("I'm Listening...");

})
