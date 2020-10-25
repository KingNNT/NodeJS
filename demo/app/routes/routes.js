const core = require("../controllers/core.controller.js");
module.exports = (app) => {
	app.get("/", core.home);
};
