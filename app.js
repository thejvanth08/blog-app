const express = require("express");
const app = express();


// configuring the app
app.set("view engine", "ejs");

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/compose-page", (req, res) => {
  res.render("compose");
});

app.post("add-post")


app.listen(3000, () => {
  console.log("server is running at port 3000...");
})