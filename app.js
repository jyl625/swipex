const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI
const users = require("./routes/api/users");

const cafeterias = require('./routes/api/cafeterias')
const sellposts = require('./routes/api/sellposts')
const conversations = require('./routes/api/conversations');
const comments = require("./routes/api/comments");
const exchanges = require("./routes/api/exchanges")

const bodyParser = require('body-parser');
const passport = require('passport');


mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./config/passport')(passport);

app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/users", users);
app.use("/api/cafeterias", cafeterias);
app.use("/api/sellposts", sellposts);
app.use("/api/conversations", conversations);
app.use("/api/comments", comments);
app.use("/api/exchanges", exchanges);




const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
