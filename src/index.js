const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

// to set the views engine

//  console.log(path.join(__dirname,"../public"));
const staticPath = path.join(__dirname, "../public");
app.set("views", path.join(__dirname, "../templates/views"));
// app.set('views', path.join(__dirname , "../templates/partial"))

app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "../templates/partial"));
//built in middleware
// app.use(express.static(staticPath));
// app.get("/", (req, res) => {
//   res.send("welcome to home page");
//   res.send();
// });

// template
app.get("/", (req, res) => {
  res.render("index.hbs");
});
app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/blog", (req, res) => {
  res.render("blog");
});
app.get("*", (req, res) => {
  res.render("404");
});
// app.get("/contact", (req, res) => {
//   res.send({
//     id: 1,
//     name: "atul",
//     city: "jaipur",
//     country: "India",
//     zip_code: 302020,
//   });
// });

app.listen(5000, () => {
  console.log("success");
});
