var express = require("express");
var path = require("path");
var session = require('express-session');
var app = express();

// use it!
app.use(session({secret: 'secretcode'})); 
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the counter.ejs view
app.get('/', function(req, res) {
    if (!req.session.count){
        req.session.count = 0;
    }
    
    req.session.count++;
    
    // req.session.count = req.session.count ? req.session.count + 1 : 1;
    console.log('count is...',req.session.count);
    res.render("counter", {count: req.session.count});
})

app.listen(8000, function() {
 console.log("listening on port 8000");
});
