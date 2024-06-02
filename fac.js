const express = require("express");
const app = express();
const bp = require("body-parser");
const ejs = require("ejs");
const { MongoClient, ObjectId } = require("mongodb");

const uri =
  "mongodb+srv://cherry:21pa1a1202@cluster0.jmk15b2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(bp.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// MongoDB client setup
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect().then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("Error connecting to MongoDB:", err);
});

// Routes


app.get("/", async (req, res) => {
 
   
    const Retrieveresult = await getStoredData();
    res.render("index.ejs", { data: Retrieveresult });
  
});
app.get("/viewMore/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const client = new MongoClient(uri);
    const storage = client.db("user").collection("profile");
    const Retriveresult = await storage.findOne({ _id: new ObjectId(id) });
    res.render("viewMore.ejs", { data: Retriveresult });
  } catch (err) {
    console.log(err.message);
  }
});

async function getStoredData() {
  const storedData = await client
    .db("user")
    .collection("profile")
    .find()
    .toArray();
  return storedData;
}

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
