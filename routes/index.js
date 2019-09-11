module.exports = function(router, nodeEnv) {
    const apiRoutes = require("./api")(router, nodeEnv);

    router.use("/api", apiRoutes);
    return router;
}