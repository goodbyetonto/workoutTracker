// Setup Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//check for process.env first
const PORT = process.env.PORT || 3000;

//const db = require("./models");

//get express instance of object/ gain access to express functions
const app = express();

//middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//make public folder accesscible from backend and frontend
app.use(express.static("public"));

//db connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { 
    useNewUrlParser: true,
    useFindAndModify: false
});

//routes
app.use(require("./routes/view.js"));
app.use(require("./routes/api.js"));


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});


