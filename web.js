
var express = require("express"),
    logfmt = require("logfmt"),
    swig  = require("swig"),
    socialbrowser = require("social-browser"),
    app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
    var browser = socialbrowser.detect(req);
    res.send(swig.renderFile('templates/main.html', { 
        browser: browser,
        req: req 
    }));
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});