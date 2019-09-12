const request = require("request");

module.exports = {
    searchMovies: async function(req, res) {
        const movieKey = process.env.TMDB_KEY;

        let searchTerm = req.body.query;

        let queryURL = "https://api.themoviedb.org/3/search/movie?api_key=" + movieKey + "&query=" + searchTerm;

        request(queryURL, function(err, response, body) {
            if (err) {
                console.log(err);
            } else {
                body = JSON.parse(body);
                res.json(body);
            }
        })
    },

    searchTV: async function(req, res) {
        const movieKey = process.env.TMDB_KEY;

        let searchTerm = req.body.query;

        let queryURL = "https://api.themoviedb.org/3/search/tv?api_key=" + movieKey + "&query=" + searchTerm;

        request(queryURL, function(err, response, body) {
            if (err) {
                console.log(err);
            } else {
                body = JSON.parse(body);
                res.json(body);
            }
        })
    }
}