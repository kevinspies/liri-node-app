require("dotenv").config();
var fs = require("fs");
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


if (command === "concert-this" && term) {//and if term is true aka they entered a search term

    // bands in town -->  https://rest.bandsintown.com/artists/replaceWithBandName/events?app_id=codingbootcamp
    var bandUrl = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";

    axios.get(bandUrl).then(
        function (response) {
            var jsonData = response.data;
            for (var i = 0; i < jsonData.length; i++) {
                console.log("------------concert " + i + "----------\n");
                console.log(jsonData[i].venue.name);
                console.log(jsonData[i].venue.country);
                console.log(jsonData[i].datetime);
            }
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

function movieFunction(someTerm) {

    // omdb -->  https://www.omdbapi.com/?t=god+father&y=&plot=short&apikey=trilogy 
    var movieUrl = "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy";

    axios.get(movieUrl).then(
        function (response) {
            var jsonData = response.data;
            //    * Title of the movie.
            //    * Year the movie came out.
            //    * IMDB Rating of the movie.
            //    * Rotten Tomatoes Rating of the movie.
            //    * Country where the movie was produced.
            //    * Language of the movie.
            //    * Plot of the movie.
            //    * Actors in the movie.
            console.log(jsonData.Title);
            console.log(jsonData.Released);
            console.log("imdb: " + jsonData.imdbRating);
            console.log("rotten tomatoes: " + jsonData.Ratings[1].Value);
            console.log("produced in: " + jsonData.Country);
            console.log(jsonData.Language);
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

if (command === "movie-this" && term) {//and if term is true aka they entered a search term



}

//------------------------------------------------------------------------------------------------------------------------
function spotifyFunction(someTerm) {

    // Artist(s)
    // The song's name
    // A preview link of the song from Spotify
    // The album that the song is from
    var spotify = new Spotify({
        id: process.env.SPOTIFY_ID,
        secret: process.env.SPOTIFY_SECRET
    });

    spotify.search({ type: 'track', query: someTerm }, function (err, data) {

        //data.tracks.items[0].album.tracks.items[0] ? ? ! ? !
        console.log(JSON.stringify(data.tracks.items[0], null, 2));
        // console.log(data.tracks.items[0].artists.external_urls.name);

        if (err) {
            return console.log('Error occurred: ' + err);
        }
    });
}
if (command === "spotify-this-song" && term) {
    spotifyFunction(term);
}
//------------------------------------------------------------------------------------------------------------------------

if (command === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function (error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }

        // We will then print the contents of data
        console.log(data);

        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");

        // We will then re-display the content as an array for later use.
        console.log(dataArr);
        if (dataArr[0] === "concert-this") {

        }
        if (dataArr[0] === "movie-this") {

        }
        if (dataArr[0] === "spotify-this-song") {
            spotifyFunction(dataArr[1]);
        }

    });
}

