//this file is not necessary as of now

var Controller = require('./controller');
const port = 3000;

function main() {

    var testController = new Controller("1234", "shhhh", "4321");
    testController.basicServer(port);

}

main()