<<<<<<< HEAD
const dbConfig = require("../config/db.js");
=======
const dbConfig = require("../db/db.js");
>>>>>>> 5742268fe11c8d2d45e3fc4296258ec6684424f3

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {}; 
db.mongoose = mongoose;
db.url = dbConfig.url;
<<<<<<< HEAD


db.user = require("./user.model.js");
db.role = require("./role.model.js");


db.tutorials = require("./tutorial.model.js")(mongoose);
db.ROLES = ["user", "admin", "moderator"];
=======
db.tutorials = require("./tutorial.model.js")(mongoose);
>>>>>>> 5742268fe11c8d2d45e3fc4296258ec6684424f3

module.exports = db;