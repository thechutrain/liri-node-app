var request = require('request');
var Twitter = require('twitter');
var Spotify = require("spotify");
var TwitterKeys = require("./keys.js");


// get twitter keys

// switch on four commands
var cmd = process.argv[2].toLowerCase();
switch (cmd) {
    case "my-tweets":
        console.log("getting you your tweets ...");
        break;
    case "spotify-this-song":
        console.log("getting you the spotify of your song ....");
        break;
    case "movie-this":
        console.log("Getting you the movie ...");
        break;
    case "do-what-it-says":
        console.log("doing what it says? ..");
        break;
    default:
        console.log("Sorry, command not recognized. Please check your spelling");
        console.log("[options] 'my-tweets', 'spotify-this-song', 'movie-this', 'do-what-it-says' ")
        break;
}