const http = require("http")
const port = 3000
var controller = require('./controller');

var testController = new  controller("id", "secret", "token");

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('okay')
});

server.listen(port, (err) => {
    if(err){
        return console.log("error", err)
    }

    //console.log(`server listening on ${port}`)
    console.log(testController.clientID)

})


// var msg = "Hello World!";
// console.log(msg);