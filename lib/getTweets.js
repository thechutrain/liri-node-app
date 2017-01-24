var Twitter = require('twitter');
// var moment = require('moment');

var keys = require("./keys.js");
var log = require("./logData.js");

// console.log("\n\n-------------------------");
var getTweets = function(){
    // 1. Set up twitter client object
    var client = new Twitter({
        consumer_key: keys.twitterKeys.consumer_key,
        consumer_secret: keys.twitterKeys.consumer_secret,
        access_token_key: keys.twitterKeys.access_token_key,
        access_token_secret: keys.twitterKeys.access_token_secret,
    });

    // 2. make a client request
    var params= {screen_name: 'gargantuanfm'};
    client.get('statuses/user_timeline', params, function(error, tweets, response){
        if (!error){
            // call function to display tweets, and max number
            displayTweets(tweets, 3);
        } else {
            console.log(error);
        }
    });
} // getTweets


// ----------- helper function ------------
function displayTweets(tweets, max_tweets){
    var returnString = "";
    // if the array is empty
    if (tweets.length == 0){
        // console.log("No tweets");
        returnString += "No tweets";
        return;
    }

    // adjust the max_tweets depending on when the user has fewer that that many tweets
    if (tweets.length < max_tweets){
        var max_tweets = tweets.length;
    }

    // for each tweet, print out the text & time stamp
    for (var i=0; i < max_tweets; i++){
        var tweet = tweets[i];
        // console.log(`--------- Tweet #${i+1} ----------`); 
        // console.log("Date-Time: " + tweet["created_at"]);
        // console.log(moment.(tweet["created_at"]).format()); // FIX LATER
        // console.log(`Your tweet: "${tweet["text"]}"`);
        // console.log("------------------------------\n");

        returnString += `--------- Tweet #${i+1} ----------\n`;
        returnString += `Date-Time: ${tweet["created_at"]}\n`;
        returnString += `Your tweet: "${tweet["text"]}"\n`;
        returnString += `------------------------------\n`;
    };
    // Print out the data
    console.log(returnString);
    // Log the data to the user
    log.logData("my-tweets", returnString);
}

module.exports.getTweets = getTweets;