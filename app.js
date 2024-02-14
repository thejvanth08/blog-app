const express = require("express");
const app = express();

// list of blogs
const blogs = [];

// configuring the app
app.set("view engine", "ejs");

app.use(express.static("./public"));

// to use form data parse
// without using this - req.body will be undefined
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("home", {blogs: blogs});
});

app.get("/compose-page", (req, res) => {
  res.render("compose");
});

app.post("/add-blog", (req, res) => {
  // name for input field == variable or property key of that value
  const { title, content} = req.body;

  // shorthand
  const blog = {title, content}; 
  blogs.push(blog);
  res.redirect("/");
});


app.listen(3000, () => {
  console.log("server is running at port 3000...");
});