const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
	res.json({ message: "Welcome to NewsApp application." });
});

require("./app/routes/ro.menu.js")(app);

app.listen(port, () => {
	console.log("Server is running on port " + port);
});
