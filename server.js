const express = require("express");
const path = require("path");
const routes = require('./routes');
const session = require('express-session');
const PORT = process.env.PORT || 3001;
const app = express();

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};


// Define middleware here
app.use(session(sess));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`🌎 ==> API server now on port ${PORT}!`));
});