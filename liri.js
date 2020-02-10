require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

// Creating a variable called search that will take the 3rd index of the process.argv as what type of 
var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

if (term === "") {
    console.log('No song was specified so here is the "The Sign" by Ace of Base');
    spotify.search({ type: 'track', query: "The Sign" }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("=================================================")
        console.log("Artist: ", data.tracks.items[0].artists[0].name);
        console.log("=================================================")
        console.log("Song: ", data.tracks.items[0].name);
        console.log("=================================================")
        console.log("Preview Link: ", data.tracks.items[0].preview_url);
        console.log("=================================================")
        console.log("Album: ", data.tracks.items[0].album.name);
        console.log("=================================================")

    });

} else if (search === "spotify-this-song") {
    console.log("Searching for a song on Spotify");
    spotify.search({ type: 'track', query: term }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("=================================================")
        console.log("Artist: ", data.tracks.items[0].artists[0].name);
        console.log("=================================================")
        console.log("Song: ", data.tracks.items[0].name);
        console.log("=================================================")
        console.log("Preview Link: ", data.tracks.items[0].preview_url);
        console.log("=================================================")
        console.log("Album: ", data.tracks.items[0].album.name);
        console.log("=================================================")

    });
}