const express = require('express');
const { MongoClient } = require('mongodb');
const data = require('./models/data');

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017`;

const client = new MongoClient(connectionStringURI);

let db;

const dbName = 'groceryListDB';

async function seedDBAndStartServer() {
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB');
    db = client.db(dbName);
    // Drops any documents, if they exist
    await db.collection('groceryList').deleteMany({});
    // Adds data to database
    const res = await db.collection('groceryList').insertMany(data);
    console.log(res);

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Mongo connection error: ', err.message);
  }
}

seedDBAndStartServer();

app.use(express.json());

// This will return any documents with embedded documents that match
app.get('/sale-over-30', (req, res) => {
  db.collection('groceryList')
    // Use dot notation for embedded document
    // $gte specifies we want percentage discounts greater than 30
    .find({ 'promotion.percentage_discount': { $gte: 30 } })
    .toArray()
    .then(results => res.send(results))
    .catch(err => {
      if (err) throw err;
    });
});
