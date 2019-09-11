module.exports = function(router, nodeEnv) {
    const controller = require("../controllers/controller");

    router.route("/api/movies").get(controller.searchMovies);
    
    return router;
}