# Slack Bot

This is a Slack bot that I am developing to research the Slack platform and respective APIs

The bot is developed in Node.js (v 8.11.2) it is an incomplete project and I am not intending to deploy it for real use. 

Testing is done locally.

## Tools used:

Slack/Events-API </br >
ngrok software </br>

## Usage

If you'd like to use this project as a starting point for developing your own bot for Slack you can simply git clone the project. Node and npm should be installed. Once you are in a terminal and are in the root project directory you can initiate the project by issuing the command "node index.js".

You will have to use a tunneling software to expose an endpoint to a url listening on port 3000, then you will have to perform a handshake challenge at Slack/Events-API for full use of the events API. Once you initiate node index.js, node will start a server listening on port 3000 that can issue JSON responses.

**Note**

The token keys  shown in the commit history are old.
