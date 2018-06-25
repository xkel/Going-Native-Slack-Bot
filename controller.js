// note this file is not necessary at all, this is just me playing around

const http = require('http');

const createSlackEventAdapter = require('@slack/events-api').createSlackEventAdapter;
const slackEvents = createSlackEventAdapter("token123"); //process.env.SLACK_VERIFICATION_TOKEN
const port = 3000; //port = process.env.PORT ||


// Attach listeners to events by Slack Event "type".
slackEvents.on('message', (event) => {
    console.log(`Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}`);

});

// Handle errors
slackEvents.on('error', console.error);

// Start a basic HTTP server
slackEvents.start(port).then(() => {
    console.log('server listening on port ${port}');
})



//Controller
function Controller(id, secret, token) {

    this.clientID = id;
    this.clientSecret = secret;
    this.token = token;
};

Controller.prototype.basicServer = function basicServer(port) {

    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`id: ${this.clientID}, secret: ${this.clientSecret}, token: ${this.token}`);
    });
    
    server.listen(port, (err) => {
        if(err){
            return console.log("error", err);
        }
    
    })
};

module.exports = Controller;

