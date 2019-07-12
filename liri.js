require("dotenv").config();
var Spotify = require('node-spotify-api');
var axios = require("axios");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);


if (process.argv[2]) {
    var command = process.argv[2];
}
// Joining the remaining arguments since an actor or tv show name may contain spaces
var term = process.argv.slice(3).join(" ");

//if no command is provided
if (!command) {
    console.log("please read the readme to know how to enter a valid input!");
}
// By default, if no search term is provided, search for "Andy Griffith"
if (!term) {
    console.log("please enter a search term, i.e. Land Before Time");
}
console.log("command + term: " + command + " " + term);
//---------------------------------------------------------------------------------------------------------------------


// bands in town -->  https://rest.bandsintown.com/artists/replaceWithBandName/events?app_id=codingbootcamp


if (command === "movie-this" && term) {//and if term is true aka they entered a search term

    // omdb -->  https://www.omdbapi.com/?t=god+father&y=&plot=short&apikey=trilogy 
    var queryUrl = "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(
        function (response) {
            console.log(response.data.plot);
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });

}

//------------------------------------------------------------------------------------------------------------------------
if (command === "spotify-this-song" && term) {

    var spotify = new Spotify({
        id: process.env.SPOTIFY_ID,
        secret: process.env.SPOTIFY_SECRET
    });

    spotify.search({ type: 'track', query: 'All the Small Things' }, function (err, data) {

        console.log(data);

        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data);
    });

}






if (command === "concert this") {

}
if (command === "do-what-it-says") {

}