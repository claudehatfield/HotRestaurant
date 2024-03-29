//Dependencies
var express = require("express");
var path = require("path");

//Set up the Express app
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true}))
app.use(express.json());

app.use(express.static("public"));

var table = [];



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
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

//Tables route shows reservations and waitlist 
app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "./public/tables.html"));
});

//Make Reservations route
app.get("/reserved", function(req, res){
    res.sendFile(path.join(__dirname, "./public/reservation.html"));
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





