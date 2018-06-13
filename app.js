const http = require("http");
const port = 3000;
var Controller = require('./controller');

var testController = new Controller("1234", "shhhh", "4321");
testController.basicServer(port);
