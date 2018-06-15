require("dotenv").config();

var fs = require("fs");
var keys = require("./keys.js");

var Twitter = require("twitter");

var Spotify = require("node-spotify-api");

var request = require("request");
function showTweets() {
    var params = { screen_name: 'HLS', limit: 20 };
    client.get("statuses/user_timeline", params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                var tweetDate = tweets[i].created_at.split(" ", 6);
                var tweetTimes = tweetDate[0] + " " + tweetDate[1] + " " + tweetDate[2] + " " + tweetDate[3];
                console.log(tweetTimes);
                console.log(tweets[i].text);
            }
        }
    });
};