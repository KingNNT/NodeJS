const model = require("../models/core.model.js");
exports.home = (req, res) => {
    let message = {
        Status: "Running",
        Developer: "KingNNT",
    };
    res.send(JSON.stringify(message));
};

exports.connect = () => {
    model.connect();
};

exports.insert = () => {
    model.insert();
};
