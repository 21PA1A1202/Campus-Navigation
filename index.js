
const port = 3000;
const express = require("express");
const bp = require("body-parser");
const ejs = require("ejs");
const { MongoClient } = require("mongodb");
const app = express();
app.use(bp.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const uri = "mongodb+srv://cherry:21pa1a1202@cluster0.jmk15b2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

// Route for the input page
app.get('/', async (req, res) => {
  const storedResp = await getStoredData("myCollection");
  res.render("index", { list: storedResp, collectionName: "vit" });
});
app.post("/", async (req, res) => {
  try {
    const result = await client.connect();
    if (result.topology.isConnected()) {
      const item = req.body.item;
      const collectionName = req.body.collection;
      const db = client.db("myDB");

      if (collectionName === "vit") {
        const collection = db.collection("myCollection");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);
      }
      else if (collectionName === "library") {
        const collection = db.collection("libraryc");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);
        
      }
      else if (collectionName === "ablock") {
        const collection = db.collection("ablock");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }
      else if (collectionName === "bblock") {
        const collection = db.collection("bblock");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }
      else if (collectionName === "cblock") {
        const collection = db.collection("cblock");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }  else if (collectionName === "vivekananda_statue") {
        const collection = db.collection("vivekananda_statue");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }
      else if (collectionName === "amultandoori") {
        const collection = db.collection("amultandoori");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }
      else if (collectionName === "drawing_hall") {
        const collection = db.collection("drawing_hall");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }   else if (collectionName === "vishnu_parking") {
        const collection = db.collection("vishnu_parking");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }
      else if (collectionName === "workshop") {
        const collection = db.collection("workshop");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }
      else if (collectionName === "park") {
        const collection = db.collection("park");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }
      else if (collectionName === "lkv") {
        const collection = db.collection("lkv");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }    else if (collectionName === "lkvcanteen") {
        const collection = db.collection("lkvcanteen");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }    else if (collectionName === "ttime") {
        const collection = db.collection("ttime");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }    else if (collectionName === "sgate") {
        const collection = db.collection("sgate");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }    else if (collectionName === "sumhstl") {
        const collection = db.collection("sumhstl");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }
      else if (collectionName === "fm") {
        const collection = db.collection("fm");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }    else if (collectionName === "minaud") {
        const collection = db.collection("minaud");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }
      else if (collectionName === "greenmed") {
        const collection = db.collection("greenmed");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }
      else if (collectionName === "svecenter") {
        const collection = db.collection("svecenter");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }
      else if (collectionName === "scmplx") {
        const collection = db.collection("scmplx");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }
      else if (collectionName === "svecenter") {
        const collection = db.collection("svecenter");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }
      else if (collectionName === "vitbcantn") {
        const collection = db.collection("vitbcantn");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }
      else if (collectionName === "budhha") {
        const collection = db.collection("budhha");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }
      else if (collectionName === "coe") {
        const collection = db.collection("coe");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }
      else if (collectionName === "svecivil") {
        const collection = db.collection("svecivil");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }
      else if (collectionName === "cseitblocks") {
        const collection = db.collection("cseitblocks");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }
      else if (collectionName === "bvpark") {
        const collection = db.collection("bvpark");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }
      else if (collectionName === "dhruvhstl") {
        const collection = db.collection("dhruvhstl");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }
      else if (collectionName === "bbatm") {
        const collection = db.collection("bbatm");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }
      else if (collectionName === "canalgt") {
        const collection = db.collection("canalgt");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }
      else if (collectionName === "dentalblock") {
        const collection = db.collection("dentalblock");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }
      else if (collectionName === "vschool") {
        const collection = db.collection("vschool");
        const documentToInsert = {
          itemName: item,
          value: 3,
        };
        await collection.insertOne(documentToInsert);

      }
      
    }
    else {
      console.log("Error establishing connection");
    }
  } catch (error) {
    console.log(error.message);
  }
  res.redirect('/');
 
});

app.get("/collection1", async (req, res) => {

  const storedResp = await getStoredData("myCollection");
  res.render("index", { list: storedResp, collectionName: "vit" });
});

app.get("/collection2", async (req, res) => {
  const storedResp = await getStoredData("libraryc");
  res.render("index", { list: storedResp, collectionName: "library" });
});
app.get("/collection3", async (req, res) => {
  const storedResp = await getStoredData("ablock");
  res.render("index", { list: storedResp, collectionName: "ablock" });
});
app.get("/collection4", async (req, res) => {
  const storedResp = await getStoredData("bblock");
  res.render("index", { list: storedResp, collectionName: "bblock" });
});
app.get("/collection5", async (req, res) => {
  const storedResp = await getStoredData("cblock");
  res.render("index", { list: storedResp, collectionName: "cblock" });
});
app.get("/collection6", async (req, res) => {
  const storedResp = await getStoredData("vivekananda_statue");
  res.render("index", { list: storedResp, collectionName: "vivekananda_statue" });
});
app.get("/collection7", async (req, res) => {
  const storedResp = await getStoredData("amultandoori");
  res.render("index", { list: storedResp, collectionName: "amultandoori" });
});
app.get("/collection8", async (req, res) => {
  const storedResp = await getStoredData("drawing_hall");
  res.render("index", { list: storedResp, collectionName: "drawing_hall" });
});
app.get("/collection9", async (req, res) => {
  const storedResp = await getStoredData("vishnu_parking");
  res.render("index", { list: storedResp, collectionName: "vishnu_parking" });
});app.get("/collection10", async (req, res) => {
  const storedResp = await getStoredData("workshop");
  res.render("index", { list: storedResp, collectionName: "workshop" });
});
app.get("/collection11", async (req, res) => {
  const storedResp = await getStoredData("park");
  res.render("index", { list: storedResp, collectionName: "park" });
});
app.get("/collection12", async (req, res) => {
  const storedResp = await getStoredData("lkv");
  res.render("index", { list: storedResp, collectionName: "lkv" });
});
app.get("/collection13", async (req, res) => {
  const storedResp = await getStoredData("lkvcanteen");
  res.render("index", { list: storedResp, collectionName: "lkvcanteen" });
});app.get("/collection14", async (req, res) => {
  const storedResp = await getStoredData("ttime");
  res.render("index", { list: storedResp, collectionName: "ttime" });
});app.get("/collection15", async (req, res) => {
  const storedResp = await getStoredData("sgate");
  res.render("index", { list: storedResp, collectionName: "sgate" });
});
app.get("/collection16", async (req, res) => {
  const storedResp = await getStoredData("sumhstl");
  res.render("index", { list: storedResp, collectionName: "sumhstl" });
});
app.get("/collection17", async (req, res) => {
  const storedResp = await getStoredData("fm");
  res.render("index", { list: storedResp, collectionName: "fm" });
});
app.get("/collection18", async (req, res) => {
  const storedResp = await getStoredData("minaud");
  res.render("index", { list: storedResp, collectionName: "minaud" });
});
app.get("/collection19", async (req, res) => {
  const storedResp = await getStoredData("greenmed");
  res.render("index", { list: storedResp, collectionName: "greenmed" });
});app.get("/collection20", async (req, res) => {
  const storedResp = await getStoredData("svecenter");
  res.render("index", { list: storedResp, collectionName: "svecenter" });
});
app.get("/collection21", async (req, res) => {
  const storedResp = await getStoredData("scmplx");
  res.render("index", { list: storedResp, collectionName: "scmplx" });
});
app.get("/collection22", async (req, res) => {
  const storedResp = await getStoredData("svecenter");
  res.render("index", { list: storedResp, collectionName: "svecenter" });
});app.get("/collection23", async (req, res) => {
  const storedResp = await getStoredData("vitbcantn");
  res.render("index", { list: storedResp, collectionName: "vitbcantn" });
});app.get("/collection24", async (req, res) => {
  const storedResp = await getStoredData("budhha");
  res.render("index", { list: storedResp, collectionName: "budhha" });
});
app.get("/collection25", async (req, res) => {
  const storedResp = await getStoredData("coe");
  res.render("index", { list: storedResp, collectionName: "coe" });
});
app.get("/collection26", async (req, res) => {
  const storedResp = await getStoredData("svecivil");
  res.render("index", { list: storedResp, collectionName: "svecivil" });
});
app.get("/collection27", async (req, res) => {
  const storedResp = await getStoredData("cseitblocks");
  res.render("index", { list: storedResp, collectionName: "cseitblocks" });
});
app.get("/collection28", async (req, res) => {
  const storedResp = await getStoredData("bvpark");
  res.render("index", { list: storedResp, collectionName: "bvpark" });
});
app.get("/collection29", async (req, res) => {
  const storedResp = await getStoredData("dhruvhstl");
  res.render("index", { list: storedResp, collectionName: "dhruvhstl" });
});
app.get("/collection30", async (req, res) => {
  const storedResp = await getStoredData("bbatm");
  res.render("index", { list: storedResp, collectionName: "bbatm" });
});
app.get("/collection31", async (req, res) => {
  const storedResp = await getStoredData("canalgt");
  res.render("index", { list: storedResp, collectionName: "canalgt" });
});
app.get("/collection32", async (req, res) => {
  const storedResp = await getStoredData("dentalblock");
  res.render("index", { list: storedResp, collectionName: "dentalblock" });
});
app.get("/collection33", async (req, res) => {
  const storedResp = await getStoredData("vschool");
  res.render("index", { list: storedResp, collectionName: "vschool" });
});


async function getStoredData(collectionName) {
  const storedData = await client
    .db("myDB")
    .collection(collectionName)
    .find()
    .toArray();
  return storedData;
}


// Route for displaying the content
app.get('/display', (req, res) => {
    const X = req.query.X;
    const Y = req.query.Y;
  const endX = req.query.endX;
  const endY = req.query.endY;
    res.render('display.ejs', { X, Y, endX, endY}); // Passing inputA and inputB to display.ejs
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
