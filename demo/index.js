const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

const config = require("./app/config/config.js");

const app = express();
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
const server = http.createServer(app);

app.set("ip", process.env.IP || config.IP);
app.set("port", process.env.PORT || config.PORT);

server.listen(app.get("port"), app.get("ip"), () => {
	console.log(
		"Chat bot server listening at %s:%d ",
		app.get("ip"),
		app.get("port")
	);
});

require("./app/routes/routes.js")(app);
