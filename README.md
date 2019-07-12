# liri-node-app
a backend node command line application that can communicate with three API's to get useful information for fun events near you! Bands in town API, OMDB API, and Spotify API

1. This app aims to allow a developer, using the command line, to query three different API's - spotify, omdb, and 'bands in town' for information about a song (artist, song name, preview link of song from spotify, album), movie (title, year, rating, country produced in, language, plot, actors), or a concert (name of venue, location, event date) respectively.


commands:

concert command --> node liri.js concert-this <artist/band name here>
spotify command --> node liri.js spotify-this-song '<song name here>'
movie command --> node liri.js movie-this '<movie name here>'
random command --> node liri.js do-what-it-says

