const drinks = require("./models/drinks.js")

// REQUIRE DEPENDENCIES
const express = require('express');
//INITIALIZE EXPRESS APP
const app = express();
const port = 3000;

// DEFINE ROUTES

app.get("/", (req, res) => {
    res.send("Welcome to Gitpub App!")
})

//Route for drink DB
// app.get("/drinks/",(req, res) => {
//     res.send(drinks)
// })

app.get("/drinks/", (req, res) => {
    res.render("drinks_index.ejs", {
        allDrinks: drinks
    })
})



// SET UP LISTEN
app.listen(port, () => {
    console.log("listening live", port)
})
