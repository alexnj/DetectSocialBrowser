
var express = require("express");
var logfmt = require("logfmt");
var socialbrowser = require("social-browser");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
    var browser = socialbrowser.detect(req);
    if (browser) {
        res.send("<h1>You are using " + browser.name + "</h1>");
    }
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});