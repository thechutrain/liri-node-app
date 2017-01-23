var request = require('request');

var getMovie = function(search){
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

module.exports.getMovie = getMovie;