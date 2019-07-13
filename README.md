# liri-node-app
a backend node command line application that can communicate with three API's to get useful information for fun events near you! Bands in town API, OMDB API, and Spotify API

Problem Being Solved:

-Finding cool venues, songs, movies, on your COMMAND LINE? Sorry, but that's just cool. So I'd say, the problem you didn't even know you had, is fixed!


Overview:

 -This app aims to allow a developer, using the command line, to query three different API's - spotify, omdb, and 'bands in town' for information about a song (artist, song name, preview link of song from spotify, album), movie (title, year, rating, country produced in, language, plot, actors), or a concert (name of venue, location, event date) respectively.


Instructions:

-use the following commands in the bash window

node liri.js concert-this <artist/band name here>
node liri.js spotify-this-song '<song name here>'
node liri.js movie-this '<movie name here>'
node liri.js do-what-it-says


Technonlogies:

-node.js, javascipt, axios, varios npm libraries, API's for spotify, bands
in town and Omdb. 
-to include: moment.js for prettier display of time


My Role (Kevin Spies):

-Designer, Developer, collaborator. The logic of this program is not too complicated - the user inputs a command and a term, the funtion runs, and decies which of four functions (each inside an if statement - should replace with switch) to run. In the first three if statements it will make requests to three different API's, only spotify not using axios, but instead using protected environment variables and a unique request function. and from those terms executes a call to some API and spits back some fun information about songs, movies etc to the console (plot, actors, country procduced in, venue date, venue location. Need to have knowledge about node.js, grabbing user input with process, how to import npm libraries, axios as an API to fetch JSON data from different company's databases, understanding of javascript.