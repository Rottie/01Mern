const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "https://magnificent-trifle-45021f.netlify.app"
};


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
require("./routes/tutorial.routes")(app);
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
//Database
const db = require("./models");
const Role = db.role;

const db = require("./models");

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    initial();
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});


// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
<<<<<<< HEAD
});


//For  create 3 rows in rows collection
// For creating 3 rows in the roles collection
async function initial() {
  try {
    const count = await Role.estimatedDocumentCount();

    if (count === 0) {
      await Promise.all([
        new Role({ name: "user" }).save(),
        new Role({ name: "moderator" }).save(),
        new Role({ name: "admin" }).save()
      ]);

      console.log("Added 'user', 'moderator', and 'admin' to roles collection");
    }
  } catch (err) {
    console.error("Error initializing roles:", err);
  }
}

});

