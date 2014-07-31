var http = require("http");

var express = require('express');
var app = express();

// Original code:


var advArray = [
	"incredibly",
	"hilariously",
	"particularly",
	"fantastically",
	"totally",
	"literally",
	"definitely",
	"trendy",
	"simply",
	"deliciously"
];

var adjArray =[
	"mundane",
	"hilarious",
	"stupid",
	"outrageous",
	"disgusting",
	"best",
	"vintage",
	"hipster",
	"surprising",
	"disturbing",
	"funniest",
	"unfathomable",
	"juicy",
	"sacred",
	"mind-bending",
	"coma-inducing",
	"90's",
	"80's",
	"70's",
	"drool-worthy"
];

var verbArray =[
	"you won't believe",
	"you can't imagine",
	"you're unable to comprehend",
	"that prove",
	"about"
];

var nounArray =[
	"Kanye West",
	"Orange is the New Black",
	"Game of Thrones",
	"Jesus",
	"Kimye",
	"Breaking Bad",
	"Tim Howard",
	"Benedict Cumberbatch",
	"Enrique Iglesias' mole",
	"guacamole",
	"Lady Gaga",
	"Scientology",
	"Beyonce",
	"Sriracha",
	"Kimchi",
	"horse masks",
	"slippery eels",
	"itchy balls",
	"bulletproof coffee",
	"angel tears",
	"sausage fest",
	"hotdog legs",
];

var prepoArray =[
	"in",
	"to",
	"on",
	"up",
	"behind",
	"like",
	"without"
]

var outcomeArray = [
	"will melt your brain",
	"you have to see before you die",
	"will blow your mind",
	"Miley would twerk for",
	"you have to do in your 20s",
	"you have to do in your 30s"
]



var headline = function() {
	console.log("Headline called");
	var number = Math.floor((Math.random() * 100) + 2);
	var randomAdv = advArray[Math.floor(Math.random()*advArray.length)];
	var randomAdj = adjArray[Math.floor(Math.random()*adjArray.length)];
	var randomVerb = verbArray[Math.floor(Math.random()*verbArray.length)];
	var randomNoun = nounArray[Math.floor(Math.random()*nounArray.length)];
	var randomPrep = prepoArray[Math.floor(Math.random()*prepoArray.length)];
	var randomOutcome = outcomeArray[Math.floor(Math.random()*outcomeArray.length)];
	return number + " " + randomAdv + " " + randomAdj + " things "+ randomVerb + " happened " + randomPrep + " " + randomNoun + " that " + randomOutcome;
};

// Node.js Code:
// app.get('/', function(req, res){
//   console.log("Request received.");


//   // var index_page = loadPage("./index.html");
//   res.send(index_page);
// });

app.use(express.static(__dirname + '/public'));

app.get('/headline.json', function(req, res){
  console.log("Request received.");
  res.send(headline());
});

var server = app.listen(5000, function() {
    console.log('Listening on port %d', server.address().port);
});
// function onRequest(request, response) {
//   console.log("Request received." + request);
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("JAMES SUCKS: " + headline());
//   response.end();
// }

// http.createServer(onRequest).listen(5000);

// console.log("Server has started.");





