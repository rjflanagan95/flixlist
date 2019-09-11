const request = require("request");

module.exports = {
    searchMovies: async function(req, res) {
        const movieKey = process.env.TMDB_KEY;

        // let searchTerm = req.body;
        let searchTerm = "batman+begins";
        // console.log(req.body);

        // this URL only ever returns a list of currently popular movies
        let queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=" + movieKey + "&query=" + searchTerm;

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