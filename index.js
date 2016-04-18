var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));
app.use(express.static("bower_components/angular"));
app.use(express.static("bower_components/angular-resource"));

app.listen(3000, function(){
  console.log('Hello world is running on port ' + port);
});

app.get('/', function (req, res) {
  res.render('index');
});
