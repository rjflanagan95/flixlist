module.exports = function(router, nodeEnv) {
    const controller = require("../controllers/controller");

    router.route("/api/movies").put(controller.searchMovies);
    
    return router;
}