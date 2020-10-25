const core = require("../controllers/core.controller.js");
module.exports = (app) => {
    app.get("/", core.home);
    app.get("/connect", core.connect);
    app.get("/insert", core.insert);
};
