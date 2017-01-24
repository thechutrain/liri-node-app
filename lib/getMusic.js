var Spotify = require("spotify");

var log = require('./logData.js');

var getSong = function(search){
    var returnString = "";
    Spotify.search({ type: 'track', query: search, limit: 2}, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
            returnString += `Error occurred: ${err}`;
            return;
        }else {
            // console.log(typeof data); // object
            var tracks = data["tracks"]["items"];
            // tracks.forEach(function(track){
            //     console.log(track);
            // })

        // Get the first track
        for (var i=0; i < 1; i++){
            // console.log(tracks[i]);
            // Get the albumn, link to preview, artist, song name
            var song = tracks[i]["name"];
            var album = tracks[i]["album"]["name"];
            var artists = tracks[i]["artists"][0]["name"]; // gets just the first artist
            var url = tracks[i]["external_urls"]["spotify"];
            // console.log("------------------");
            // console.log(`The song: ${song}`);
            // console.log(`Artist: ${artists}`);
            // console.log(`Preview url: ${url}`);
            returnString += `------------------\n`;
            returnString += `The song: ${song}\n`;
            returnString += `Artist: ${artists}\n`;
            returnString += `Preview url: ${url}\n`;
        }; // for loop

        }; // else

        // print data to the user
        console.log(returnString);
        // log the data
        log.logData("spotify-this-song " + search, returnString);

    });

}; // getSong

module.exports.getSong = getSong;