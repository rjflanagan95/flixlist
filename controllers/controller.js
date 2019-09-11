const request = require("request");

module.exports = {
    searchMovies: async function(req, res) {
        const movieKey = process.env.TMDB_KEY;

        let queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=" + movieKey + "&query=Jack+Reacher";

        request(queryURL, function(err, response, body) {
            if (err) {
                console.log(err);
            } else {
                body = JSON.parse(body);
                console.log(body);
            }
        })
    }
}