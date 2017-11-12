var express = require("express");
var path = require("path");
var session = require('express-session');
// create the express app
var app = express();
// var bodyParser = require('body-parser');

app.use(session({secret: 'secretcode'})); 
// use it!
// app.use(bodyParser.urlencoded({ extended: true }));

// static content
// app.use(express.static(path.join(__dirname, "./static")));

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the counter.ejs view
app.get('/', function(req, res) {
    req.session.count ++;
    console.log('count is...',req.session.count);
    res.render("counter", {count: req.session.count});
})

app.listen(8000, function() {
 console.log("listening on port 8000");
});
