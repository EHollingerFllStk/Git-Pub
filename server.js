const drinks = require("./models/drinks.js")
const foods = require("./models/foods.js")

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
//////Foods Routes

app.get("/foods/", (req, res) => {
    res.render("foods_index.ejs", {
        allFoods: foods
    })
})

//List of foods in ordered list in drinks_index.js
app.get("/foods/:indexOfFoodsArray", (req, res)=>{
    res.render('foods_show.ejs', {
      food: foods[req.params.indexOfFoodsArray],
    })
  });

app.get("/foods/:id",(req, res)=> {
    res.send(req.params.id) 
 })



// SET UP LISTEN
app.listen(port, () => {
    console.log("listening live", port)
})

