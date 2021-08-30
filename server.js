const express = require("express");

const app = express();

const mongoose = require("mongoose");

const cors = require("cors");

const path = require("path");

const PORT = process.env.PORT || 5000;

require('dotenv').config()

app.use(express.urlencoded({ extended: true }));

app.use(express.json()); 

app.use(cors());
require('dotenv').config()
//MONGODB ATLAS CONNECTION STRING
mongoose.connect(process.env.MONGODB_URI);

//MONGOOSE SCHEMA
const projectSchema = {

    title: String,

    description: String,

    technologies: Array,

    heroku: String,

    github: String

}

//SETTING MONGOOSE MODEL
const Project = mongoose.model("Project", projectSchema);

//API ROUTE
app.get('/projects', function(req, res) {

    Project.find().then(projects => res.json(projects));

})

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, function() {

    console.log("express is running");

})