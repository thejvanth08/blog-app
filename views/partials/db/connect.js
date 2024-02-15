// connecting to db
const {MongoClient} = require("mongodb");

// connection string
const uri = "mongodb://127.0.0.1:27017/blogDB";

const client = new MongoClient(uri);

