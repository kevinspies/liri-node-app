console.log('this is loaded');

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};









// bands in town -->   https://rest.bandsintown.com/artists/replaceWithBandName/events?app_id=codingbootcamp

// omdb -->  https://www.omdbapi.com/?t=god+father&y=&plot=short&apikey=trilogy 

// var Spotify = require('node-spotify-api');

// var spotify = new Spotify({
//     id: <your spotify client id>,
//   secret: <your spotify client secret>
//             });

// spotify.search({type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//           }

//         console.log(data); 
// });