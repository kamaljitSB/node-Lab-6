/*
 Authors:
 Your name and student #:
 Your Partner's Name and student #:
 (Make sure you also specify on the Google Doc)
*/
const { render } = require("ejs");
const express = require("express");
const fs = require("fs");

let app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index", {
    movie_names: ["Transformers", "Gladiator", "Harry Potter"],
  });
});

app.get("/myForm", (req, res) => res.render("pages/myForm"));

app.post("/myForm", (req, res) => {
  // Add your implementation here
  let movie_body = req.body;
  let movie_split_list = movie_body.moviename.split(",");
  res.render("pages/index", { movie_names: movie_split_list });
});

app.get("/myListQueryString", (req, res) => {
  // Add your implementation here
  let movie1 = req.query.movie1;
  let movie2 = req.query.movie2;

  if (movie1 === undefined || movie2 === undefined) {
    res.send(`<h2>Please enter movie names.</h2>`);
  }
  let movie_list = [movie1, movie2];

  res.render("pages/index", { movie_names: movie_list });
});

app.get("/search/:movieName", (req, res) => {
  // Add your implementation here
  let movie;
});

app.listen(3000, () => {
  console.log("Server is running on port 3000 🚀");
});
