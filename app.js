const express = require("express");
const app = express();
const { addBlog, getBlogs, connectDB } = require("./db/database");

// configuring the app
app.set("view engine", "ejs");

app.use(express.static("./public"));

// to use form data parse
// without using this - req.body will be undefined
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  // as the return func is async
  const blogs = await getBlogs();
  console.log(blogs);
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
  addBlog(blog);

  // blogs.push(blog);
  res.redirect("/");
});

const start = async () => {
  // url of db
  const url = "mongodb://127.0.0.1:27017/";
  await connectDB(url);
  console.log("Connected to DB");

  app.listen(3000, () => {
    console.log("server is running at port 3000...");
  });
}

start();