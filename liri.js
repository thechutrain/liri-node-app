// npm modules
// var Twitter = require('twitter');
// var Spotify = require("spotify");

// modules imported from my lib
var Movie = require("./lib/getMovie.js");
var Tweet = require("./lib/getTweets.js");
var Music = require("./lib/getMusic.js");


// get twitter keys

// 1. Get User Command & their input
var cmd = process.argv[2].toLowerCase();
var userInput = process.argv[3];

// 2. Execute specific cmd on user input, if applicable
switch (cmd) {
    case "my-tweets":
        console.log("getting your latest tweets ...");
        Tweet.getTweets();
        break;
    case "spotify-this-song":
        console.log("getting you the spotify of your song ....");
        Music.getSong(userInput)
        break;
    case "movie-this":
        console.log("Getting you the movie ..." + userInput);
        Movie.getMovie(userInput); // custom function in my lib folder
        break;
    case "do-what-it-says":
        console.log("doing what it says? ..");
        break;
    default:
        console.log("Sorry, command not recognized. Please check your spelling");
        console.log("[options] 'my-tweets', 'spotify-this-song', 'movie-this', 'do-what-it-says' ")
        break;
};
