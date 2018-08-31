// access to express API
var express = require('express');

// create our app
var app = express();

// adds fuctionality to express app
// express.static specifies a folder name we want to expose to web server (this is public folder in this case)
app.use(express.static('public'));

// start server with 2 arguments, port 3000, and funciton to be called once server is up
app.listen(3000, function() {
  console.log('Express server is up on port 3000');
})
