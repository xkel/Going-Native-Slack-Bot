const http = require('http');

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

