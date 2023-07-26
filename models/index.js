
const dbConfig = require("../config/db.js");



const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {}; 
db.mongoose = mongoose;
db.url = dbConfig.url;



db.user = require("./user.model.js");
db.role = require("./role.model.js");


db.tutorials = require("./tutorial.model.js")(mongoose);
db.ROLES = ["user", "admin", "moderator"];



module.exports = db;
