const express = require('express');
// We import the ObjectId class from mongodb
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017`;

const client = new MongoClient(connectionStringURI);

let db;

const dbName = 'inventoryDB';

client.connect()
  .then(() => {
    console.log('Connected successfully to MongoDB');
    db = client.db(dbName);

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error: ', err.message);
  });

app.use(express.json());

app.post('/create', (req, res) => {
  db.collection('bookCollection').insertOne(
    { title: req.body.title, author: req.body.author }
  )
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});

app.get('/read', (req, res) => {
  db.collection('bookCollection')
    .find({})
    .toArray()
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});

// To delete a document, we need to convert the string id in body to an ObjectId
app.delete('/delete', (req, res) => {
  // Wrap the id in the ObjectId class to instantiate a new instance
  const bookId = new ObjectId(req.body.id);

  // Use deleteOne() to delete one object
  db.collection('bookCollection').deleteOne(
    // This is the filter. We delete only the document that matches the _id provided in the request body.
    { _id: bookId }
  )
    .then(results => {
      console.log(results);
      res.send(
        results.deletedCount ? 'Document deleted' : 'No document found!'
      );
    })
    .catch(err => {
      if (err) throw err;
    });
});
