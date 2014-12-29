//******* SETUP Information *******
//1. Define the packages that we need!

var express = require('express');
var Request = require('request');
var bodyParser = require('body-parser');

//2. Instantiate that package!
var app = express();

//3. Tell App.Js where things are

// Set up the public directory to serve our Javascript file
app.use(express.static(__dirname + '/public'));
// Set EJS as templating language
app.set('views', __dirname + '/views');
app.engine('.html', require('ejs').__express);
app.engine('.css', require('ejs').__express);
app.set('view engine', 'html');

// Enable json body parsing of application/json
app.use(bodyParser.json());








//******* ROUTES *******
//GETS THE MAIN ROUTE

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//HOME
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//1.+++++++GOES TO INDEX+++++++++++++
//This is where stuff goes to by default.
app.get("/", function (request, response) {
	console.log("In main route");
	response.render('index');
});

app.get("*", function (request, response) {
	console.log("In catch-all place");
	response.render('index');
});








//******* LET THERE BE A WEBSITE! *******
var port = process.env.PORT || 3000;
app.listen(process.env.PORT || 3000);
// app.listen(3000);
console.log('Express started on port 3000');

