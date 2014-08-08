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
	"deliciously",
	"unbelievably"
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
	"juicy",
	"sacred",
	"mind-bending",
	"coma-inducing",
	"90's",
	"80's",
	"70's",
	"drool-worthy",
	"aggressive",
	"bloody",
	"next-level",
	"colorful",
	"handsome",
	"magnificent",
	"shiny",
	"sparkling",
	"ugly",
	"expensive",
	"horrible",
	"impossible",
	"innocent",
	"modern",
	"mushy",
	"odd",
	"outstanding",
	"powerful",
	"prickly",
	"real",
	"super",
	"talented",
	"wild",
	"awful",
	"bad",
	"clumsy",
	"confused",
	"crazy",
	"creepy",
	"dangerous",
	"disgusted",
	"evil",
	"fierce",
	"grumpy",
	"lazy",
	"mysterious",
	"nasty", 
	"naughty",
	"obnoxious",
	"outrageous",
	"scary",
	"terrible",
	"funny",
	"fat",
	"gigantic",
	"huge",
	"massive",
	"teeny-tiny",
	"noisy",
	"filthy",
	"life-changing"
];

var verbArray =[
	"you won't believe",
	"you can't imagine",
	"you're unable to comprehend",
	"that prove",
	"about",
	"you turn down for what that"
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
	"Horse Masks",
	"kids these days",
	"Koala bears with untreated Chlamydia",
	"Pears that look like butts",
	"hotdog legs",
	"Yogurt commercials",
	"Wacky waving inflatable arm flailing tube man",
	"Miley cyrus’ tongue",
	"orphans and puppies",
	"man sideboob",
	"Sarah Palin",
	"edible thongs",
	"Justin Bieber's first pube",
	"sausage fest",
	"Oprah Winfrey",
	"Dumbledore's hat",
	"spirit fingers",
	"Ouija Board",
	"Selfie",
	"hotdog legs",
	"Paul the octopus",
	"Doge",
	"erotic cucumbers",
	"furious honey badgers",
	"Drake’s soft pussy",
	"Quesorito",
	"Ron Swanson",
	"Catholic nuns",
	"Nyan cat",
	"Coachella",
	"Instagram filter",
	"#hashtags",
	"Sharknado",
	"Let It Go cover",
	"Vine account",
	"Nicolas Cage",
	"the Fresh Prince of Bel-air",
	"Miley Cyrus’ snaggle tooth",
	"Sk8r Bois"
];

var prepoArray =[
	"in",
	"to",
	"on",
	"up",
	"behind",
	"like",
	"without"
];

var outcomeArray = [
	"will melt your brain",
	"you have to see before you die",
	"will blow your mind",
	"Miley would twerk for",
	"you have to do in your 20s",
	"you have to do in your 30s",
	"make you go bananas",
	"only happen when you're high"
];



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





