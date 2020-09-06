module.exports = (app) => {
	const menu = require("../controllers/con.menu.js");
	// Create a new
	app.post("/menu/ins", menu.create);
	// Retrieve all
	app.get("/menu/findall", menu.findAll);
	// Retrieve a single with menuID
	app.get("/menu/findone/:menuID", menu.findOne);
	// Update a Customer with menuID
	app.put("/menu/update/:menuID", menu.update);
	// Delete a Customer with menuID
	app.delete("/menu/delone/:menuID", menu.delete);
	// delete all
	app.delete("/menu/delall", menu.deleteAll);
};
