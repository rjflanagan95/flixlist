module.exports = function(router, nodeEnv) {
    const controller = require("../controllers/controller");

    router.route("/api/movies").put(controller.searchMovies);
    router.route("/api/tv").put(controller.searchTV);
    // router.route("/api/movies/trailers").put(controller.getTrailer);
    
    return router;
}