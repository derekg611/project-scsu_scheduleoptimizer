const http = require("http");
const express = require("express");
const app = express();
const calendar = require("./calendarConfig");
const utils = require("./utils.js")

const path = require('path');
app.set("view-engine", "ejs");
directoryName = path.resolve();
app.use(express.static((path.join(directoryName, 'views'))));

app.get("/",(req,res)=>{
    const year = req.query.year || 2021;
    const months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

    res.render("index.ejs",{calendar: calendar(year),months,year});
});

app.listen(80,function() {console.log("Listening on port 80")});
