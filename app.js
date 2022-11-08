// jshind esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/js/date.js");
// exporting into app.js

const app = express();

// for favicon
app.use("/public", express.static("public"));

const items = [];
// it's possible to push new element in array
// but not to simply assign it to a brand new array.

const workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/css"));

// app.use(express.favicon(__dirname + "/public/favicon.ico"));

app.get("/", function (req, res) {
  let day = date.getDate();
  // call the function that's bound to
  // that constant date and we activate
  // getDate function
  res.render("list", {
    listTitle: day,
    newListItems: items,
  });
  //   key value pair
});

app.get("/work", function (req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems,
  });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
