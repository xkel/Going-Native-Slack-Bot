var http = require('http');
var botPostMessage = require('./bot');

//Generate tokens from Slack and then place them in your own local .env file that you do not publish
var botAuth = process.env.BOT_AUTH;
var auth = process.env.USER_AUTH;

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
        console.log("Body: "+body);
        var json = JSON.parse(body);
        
        if(json.challenge){
            console.log("challenge: " + json.challenge);
        }else if(json.event){
            console.log("message was sent: " + json.event.text);
            // botPostMessage.botPostMessage("Echo: " + json.event.text);

            if(json.event.username != "DaneBot"){
                botPostMessage("Echo: " + json.event.text, botAuth);
            }
            

        }
        //console.log("body: " + body);
        
        //console.log(post.challenge);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(json.challenge); 
    });
});

console.log('Listening on port 3000');

