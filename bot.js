var HTTPS = require('https');

//sends a http request of type specified in options parameters
function sendReq(options ){
    var data;
    data = '';

    var req = HTTPS.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
            data += chunk;
        });
        res.on('end', () => {
            console.log("No more data!");
        });
    });
    req.on('error', function(err) {
        console.log('error with request ' + JSON.stringify(err));
    });
    req.on('timeout', function(err){
        console.log('timeout with request ' + JSON.stringify(err));
    });
    req.end()
}
//sends a http request of type specified in options parameters, with an additional body argument
function sendReq(options, body ){
    var data;
    data = '';
    var req = HTTPS.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
            data += chunk;
        });
        res.on('end', () => {
            console.log("No more data!");
        });
    });
    req.on('error', function(err) {
        console.log('error with request ' + JSON.stringify(err));
    });
    req.on('timeout', function(err){
        console.log('timeout with request ' + JSON.stringify(err));
    });
    req.end(JSON.stringify(body))
}

function getChannels(){ 
    var options;

    options = {
        hostname: 'www.slack.com',
        path: '/api/channels.list',
        method: 'GET',
        headers: {
            'Authorization': bot_auth,
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    };

    sendReq(options);
}

function botPostMessage(message){
    var options, body;
    options = {
        hostname: 'www.slack.com',
        path: '/api/chat.postMessage',
        method: 'POST',
        headers: {
            'Authorization': 'Bearer xoxb-379052561712-383098524721-3bQUrQUSaURzIFY8OKrTEmE1',
            'Content-Type': 'application/json',
        }
    };
    body = {
        'channel': 'CB5R6F1K6',
        'text': message
    };
    sendReq(options, body);
}

//Test API runs the first test API method to verify if things are running properly (for personal experience, not necessary at all)
function testAPI(){
    var options;
    options = {
        hostname: 'www.slack.com',
        path: '/api/api.test',
        method: 'POST',
        auth: 'Authorization: Bearer xoxp-379052561712-380798154231-383459354339-34ce5e30605ccdb841e26774a5f0f3e9',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    sendReq(options);
}

botPostMessage("Test1");
// exports.testAPI = testAPI;
