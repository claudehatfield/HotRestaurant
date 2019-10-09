//Dependencies
var express = require("express");
var path = require("path");

//Set up the Express app
var app = express();
var PORT = 3000;

var table = [
    {
        routeName: "yoda",
        name: "Yoda",
        role: "Jedi Master",
        age: 900,
        forcePoints: 2000
    },

];

var waitlist = [
    {
        routeName: "moana",
        name: "Moana",
        role: "Voyager",
        age: 23,
        forcePoints: 20
    },

];

//landing page is a GET route
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

//Tables route 
app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
});

//Make Reservations route
app.get("/reservations", function(req, res){
    res.sendFile(path.join(__dirname, "?"));
});

//2 API links: API Table route, API Waitlist route
app.get("/api/tables", function(req, res){
    return res.json(table);
});

app.get("/api/waitlist", function(req, res){
    return res.json(waitlist);
});

//Post Reservations route
app.post("/??", function(req, res){
    res.sendFile(path.join(__dirname, "??.html"));
});

//Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });





