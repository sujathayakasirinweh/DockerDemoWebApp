'use strict';

const express = require('express');

// Constants
const PORT = 8083;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
	var now = new Date();
  res.send('<html><body><h1>Hi Everybody! Hearty welcome to the session on Docker Security</h1><h2> I am Sujatha Yakasiri From EdgeVerve(An Infosys Company), Bangalore, India.</h2></body></html>'+ now);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);