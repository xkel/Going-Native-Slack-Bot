var http = require('http');
var querystring = require('querystring');


//Set up a server to allow listening and responding to Events

var server = http.createServer().listen(3000);

server.on('request', function (req, res) {
    if (req.method == 'POST') {
        var body = '';
    }

    req.on('data', function (data) {
        body += data;
    });

    req.on('end', function () {
        //var post = querystring.parse(body);
        var json = JSON.parse(body);

        if(json.challenge){
            console.log("challenge: " + json.challenge);
        }else if(json.event){
            console.log("message was sent: " + json.event.text);

        }
        //console.log("body: " + body);
        
        //console.log(post.challenge);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(json.challenge); 
    });
});

console.log('Listening on port 3000');
