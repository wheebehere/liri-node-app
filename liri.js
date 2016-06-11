var args = process.argv;
var newArray = [];
for (var i = 0; i < args.length; i++) {
	newArray.push(args[i]);
}

//console.dir(object)
console.log(newArray);


switch (newArray[3]) {

  case 'my-tweets':
    //Statements executed when the result of expression matches value1
    myTweets();
    [break;]

  case 'spotify-this-song':
    //Statements executed when the result of expression matches value2
    spotifyThisSong();
    [break;]


  case 'movie-this':
    //Statements executed when the result of expression matches valueN
    movieThis();
    [break;]



  case 'do-what-it-says':
  	doWhatItSays();

  [break];

  default:

    //Statements executed when none of the values match the value of the expression
    console.log('Not a valid parameter... Please try again.')
    [break;]

}

function myTweets() {
	// need to call keys.js file??
}

function spotifyThisSong() {
	//check random.txt
}

function movieThis() {
var request = require('request');

//instead of having a huge URL that's difficult to read
//break it up into a variable object such as: query string
var options = {
	url: 'http://www.omdbapi.com/',
	qs: {
		t: 'demolition+man',
		plot: 'short',
		r: 'json'
	}
}
request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body)  
  }
})
}

function doWhatItSays() {

}