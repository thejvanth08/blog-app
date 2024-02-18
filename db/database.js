const { MongoClient } = require("mongodb");

let client, blogCol;

const connectDB = async (url) => {
  try {
    client = new MongoClient(url);
    // this can't be outside - when only requiring the module, it is executed
    // so we want to set after invoking the connectDB()
    blogCol = client.db("blogDB").collection("blogs");
    await client.connect();
  } catch(err) {
    console.log("DB Error: " + err);
  }
}


const addBlog = async (blog) => {
  try {
    await blogCol.insertOne(blog);
    console.log("blog added");
  } catch(err) {
    console.log("Error in adding blog: " + err);
  }
}

const getBlogs = async () => {

  const blogs = [];

  try {
    const blogsCursor = await blogCol.find({});
    for await (const blog of blogsCursor) {
      blogs.push(blog);
    }
    return blogs;
  } catch(err) {
    console.log("Error in getting blogs: " + err);
  }
}

module.exports = {connectDB, addBlog, getBlogs};