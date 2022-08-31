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

//Style and list drinks_index.ejs
app.get("/drinks/", (req, res) => {
    res.render("drinks_index.ejs", {
        allDrinks: drinks
    })
})

//List of drinks in ordered list in drinks_index.js
app.get("/drinks/:indexOfDrinksArray", (req, res)=>{
    res.render('drinks_show.ejs', {
      drink: drinks[req.params.indexOfDrinksArray],
    })
  });

app.get("/drinks/:id",(req, res)=> {
    res.send(req.params.id) 
 })

 app.get("/drinks/:name")

// SET UP LISTEN
app.listen(port, () => {
    console.log("listening live", port)
})
