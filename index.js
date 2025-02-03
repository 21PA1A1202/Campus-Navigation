const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const uri = "mongodb+srv://cherry:21pa1a1202@cluster0.jmk15b2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
const dbName = "myDB";

async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Database connection error:", error.message);
    }
}
connectDB();

async function insertData(collectionName, item) {
    try {
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const documentToInsert = { itemName: item, value: 3 };
        await collection.insertOne(documentToInsert);
    } catch (error) {
        console.error("Error inserting data:", error.message);
    }
}

async function getStoredData(collectionName) {
    try {
        const db = client.db(dbName);
        return await db.collection(collectionName).find().toArray();
    } catch (error) {
        console.error("Error fetching data:", error.message);
        return [];
    }
}

const collectionNames = [
    "vit", "library", "ablock", "bblock", "cblock", "vivekananda_statue", "amultandoori",
    "drawing_hall", "vishnu_parking", "workshop", "park", "lkv", "lkvcanteen", "ttime", "sgate",
    "sumhstl", "fm", "minaud", "greenmed", "svecenter", "scmplx", "vitbcantn", "budhha", "coe",
    "svecivil", "cseitblocks", "bvpark", "dhruvhstl", "bbatm", "canalgt", "dentalblock", "vschool"
];

app.get('/', async (req, res) => {
    const storedResp = await getStoredData("myCollection");
    res.render("index", { list: storedResp, collectionName: "vit" });
});

app.post("/", async (req, res) => {
    const { item, collection } = req.body;
    if (collectionNames.includes(collection)) {
        await insertData(collection, item);
    } else {
        console.error("Invalid collection name");
    }
    res.redirect("/");
});

collectionNames.forEach(collection => {
    app.get(`/collection/${collection}`, async (req, res) => {
        const storedResp = await getStoredData(collection);
        res.render("index", { list: storedResp, collectionName: collection });
    });
});

app.get('/display', (req, res) => {
    const { X, Y, endX, endY } = req.query;
    res.render('display.ejs', { X, Y, endX, endY });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
