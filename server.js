var express = require("express");
var path = require("path");
var session = require('express-session');
var app = express();


app.use(session({secret: 'secretcode'})); 

// setting up ejs and our views folder

// use it!
app.use(session({secret: 'secretcode'})); 

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the counter.ejs view
app.get('/', function(req, res) {
    if (!req.session.count){
        req.session.count = 0;
    }
    req.session.count += 1;
    // req.session.count = req.session.count ? req.session.count + 1 : 1;
    console.log('count is...',req.session.count);
    res.render("counter", {count: req.session.count});
})

app.post('/add_two', function(req,res){
    req.session.count += 2;
    console.log('count is...',req.session.count);
    res.redirect('/');
})

app.post('/reset', function(req,res){
    req.session.count = 1;
    console.log('count is...',req.session.count);
    res.redirect('/');
})

app.listen(8000, function() {
 console.log("listening on port 8000");
});
