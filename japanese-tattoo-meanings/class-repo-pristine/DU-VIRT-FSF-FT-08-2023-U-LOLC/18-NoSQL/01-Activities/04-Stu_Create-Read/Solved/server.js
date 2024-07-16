const express = require('express');
// Run npm install mongodb and require mongodb and MongoClient class
const { MongoClient } = require('mongodb');

const app = express();
const port = 3001;

// Connection string to local instance of MongoDB
const connectionStringURI = `mongodb://127.0.0.1:27017`;

// Initialize a new instance of MongoClient
const client = new MongoClient(connectionStringURI);

// Declare a variable to hold the connection
let db;

// Create variable to hold our database name
const dbName = 'inventoryDB';

// Use connect method to connect to the mongo server
client.connect()
  .then(() => {
    console.log('Connected successfully to MongoDB');
    // Use client.db() constructor to add new db instance
    db = client.db(dbName);

    // Start up express server
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error: ', err.message);
  });

// Built in Express function that parses incoming requests to JSON
app.use(express.json());

// Post request to create a single document to collection
app.post('/create', (req, res) => {
  // collection() creates or selects instance of collection. Takes in collection name
  // insertOne() inserts single document into collection. Takes in object.
  db.collection('bookCollection').insertOne(
    { title: req.body.title, author: req.body.author }
  )
    // Sends results
    .then(results => res.json(results))
    // Handles error
    .catch(err => {
      if (err) throw err;
    });
});

// Post request to add multiple document to collection
app.post('/create-many', (req, res) => {
  db.collection('bookCollection').insertMany(
    [
      { "title": "Oh the Places We Will Go!" },
      { "title": "Diary of Anne Frank" }
    ]
  )
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});

// Get request to read all the documents in a collection
app.get('/read', (req, res) => {
  db.collection('bookCollection')
    // find() returns all documents. Equivalent to `Select *` in SQL.
    .find({})
    // Returns all the documents in an array
    .toArray()
    // Sends results
    .then(results => res.json(results))
    // Handles error
    .catch(err => {
      if (err) throw err;
    });
});
