const express = require("express");
const app = express();
const mongoose = require("mongoose")
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 5000;

require('dotenv').config()

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

app.use(cors());

//MONGODB ATLAS CONNECTION STRING
mongoose.connect(process.env.MONGODB_URI);

//MONGOOSE SCHEMA
const projectSchema = {
    title: String,
    description: String,
    technologies: Array,
    heroku: String,
    github: String,
    image: String
}

//SETTING MONGOOSE MODEL
const Project = mongoose.model("Project", projectSchema);

//API routes

//test to see if server is running
app.get('/projects', function(req, res) {
    Project.find().then(projects => res.json(projects));
})

app.listen(port, function() {
    console.log("express is running");
})