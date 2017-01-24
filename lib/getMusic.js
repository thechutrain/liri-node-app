var Spotify = require("spotify");

var getSong = function(search){
    Spotify.search({ type: 'track', query: search, limit: 2}, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
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
            console.log("------------------");
            console.log(`The song: ${song}`);
            console.log(`Artist: ${artists}`);
            console.log(`Preview url: ${url}`);
        }; // for loop

        }; // else
    
        // Do something with 'data' 
    });

}; // getSong

module.exports.getSong = getSong;