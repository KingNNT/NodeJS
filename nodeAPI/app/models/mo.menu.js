const db = require("./db.js");
const sql = require("./db.js");
const Menu = function (menu) {
	this.tittle = menu.tittle;
	this.subtitle = menu.subtitle;
	this.urlimage = menu.urlimage;
	this.parentcode = menu.parentcode;
};

Menu.create = (newMenu, result) => {
	sql.query("INSERT INTO menu SET ?", newMenu, (err, res) => {
		if (err) {
			console.log("error: ", err);
			result(err, null);
			return;
		}

		console.log("created newMenu: ", { id: res.insertId, ...newMenu });
		result(null, { id: res.insertId, ...newMenu });
	});
};

Menu.findById = (menuID, result) => {
	sql.query(`SELECT * FROM menu WHERE id = ${menuID}`, (err, res) => {
		if (err) {
			console.log("error: ", err);
			result(err, null);
			return;
		}

		if (res.length) {
			console.log("found: ", res[0]);
			result(null, res[0]);
			return;
		}
		result({ kind: "not_found" }, null);
	});
};

Menu.getAll = (result) => {
	sql.query("SELECT * FROM menu", (err, res) => {
		if (err) {
			console.log("error: ", err);
			result(null, err);
			return;
		}

		console.log("menu: ", res);
		result(null, res);
	});
};
Menu.updateById = (id, menu, result) => {
	sql.query(
		"UPDATE menu SET tittle = ?, subtitle = ?, urlimage = ?, parentcode = ?  WHERE id = ?",
		[menu.tittle, menu.subtitle, menu.urlimage, menu.parentcode, id],
		(err, res) => {
			if (err) {
				console.log("error: ", err);
				result(null, err);
				return;
			}

			if (res.affectedRows == 0) {
				result({ kind: "not_found" }, null);
				return;
			}

			console.log("updated: ", { id: id, ...menu });
			result(null, { id: id, ...menu });
		}
	);
};
Menu.remove = (id, result) => {
	sql.query("DELETE FROM menu WHERE id = ?", id, (err, res) => {
		if (err) {
			console.log("error: ", err);
			result(null, err);
			return;
		}

		if (res.affectedRows == 0) {
			result({ kind: "not_found" }, null);
			return;
		}

		console.log("deleted menu with id: ", id);
		result(null, res);
	});
};
Menu.removeAll = (result) => {
	sql.query("DELETE FROM menu", (err, res) => {
		if (err) {
			console.log("error: ", err);
			result(null, err);
			return;
		}

		console.log(`deleted ${res.affectedRows} menu`);
		result(null, res);
	});
};

module.exports = Menu;
