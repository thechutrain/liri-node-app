var request = require('request');
var Twitter = require('twitter');
var Spotify = require("spotify");
var TwitterKeys = require("./keys.js");


// get twitter keys

// 1. Get User Command & their input
var cmd = process.argv[2].toLowerCase();
var userInput = process.argv[3];

// 2. Execute specific cmd on user input, if applicable
switch (cmd) {
    case "my-tweets":
        console.log("getting you your tweets ...");
        break;
    case "spotify-this-song":
        console.log("getting you the spotify of your song ....");
        break;
    case "movie-this":
        console.log("Getting you the movie ..." + userInput);
        getMovie(userInput);
        break;
    case "do-what-it-says":
        console.log("doing what it says? ..");
        break;
    default:
        console.log("Sorry, command not recognized. Please check your spelling");
        console.log("[options] 'my-tweets', 'spotify-this-song', 'movie-this', 'do-what-it-says' ")
        break;
};

// -------- Main FUNCTIONS ------
function getMovie(search){
    var searchTitle = search;
    // if undefined search, set it to Mr. Body
    if (search == undefined) var searchTitle = "Mr. Nobody";
    
    // build request url
    var re = new RegExp("/[\s]/","g");
    var search_term = searchTitle.replace(re, "+");
    // var search_term = searchTitle.split(" ").join("+"); // two different ways, but can't do .replace(" ", "+") --> only one match max
    console.log(search_term);
    const base_url = "http://www.omdbapi.com/?";
    var search_url = "y=&plot=short&r=json&tomatoes=true&t=" + search_term;
    // make request
    request(base_url + search_url, function(error, response, body){
        if (!error && response.statusCode == 200){
            // console.log(body);
            var body = JSON.parse(body);
            var data = {
            "title": body["Title"],
            "year": body["Year"],
            "IMDB rating": body["imdbRating"],
            "country": body["Country"],
            "language" : body["Language"],
            "plot" : body["Plot"],
            "actors" : body["Actors"],
            "Rotten Tomatoes Rating" : body["tomatoRating"],
            "Rotten Tomatoes url" : body["tomatoURL"],
            }; 
            // console.log(data);
            prettyPrintData(data);
        }
    }); // request

}; // getMovie



// -------- helper FUNCTIONS ------
function prettyPrintData(object){
    for (key in object){
        console.log(`${key}: ${object[key]}`);
    }
}