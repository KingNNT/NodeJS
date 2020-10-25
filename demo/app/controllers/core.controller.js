const menu = require("../models/core.model.js");
exports.home = (req, res) => {
	let message = {
		Status: "Running",
		Developer: "KingNNT",
	};
	res.send(JSON.stringify(message));
};
