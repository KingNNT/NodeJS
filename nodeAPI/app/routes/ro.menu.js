module.exports = (app) => {
	const menu = require("../controllers/con.menu.js");
	app.post("/menu/ins", menu.create);
	app.get("/menu/findAll", menu.findAll);
	app.get("/menu/findOne/:menuID", menu.findOne);
	app.put("/menu/update/:menuID", menu.update);
	app.delete("/menu/delOne/:menuID", menu.delete);
	app.delete("/menu/delAll", menu.deleteAll);
};
