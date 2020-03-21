var MongoClient = require("mongodb").MongoClient;

// Connect to the db
const Mongo = () => {
  MongoClient.connect("mongodb://127.0.0.1:27017", (err, client) => {
    if (err) {
      throw err;
    } else {
      console.log("connected");
    }
    db.close();
  });
};
Mongo();
const dbName = 'Employees';
const createInstance = () => {
  return new promise((res, rej) => {
    MongoClient.co ('Employees', function(err, data) {
      if (err) {
        console.log(err, err.stack);
        rej(err);
      } else {
        res(data);
      }
      const db = client.db('Employees');
    });
  });
};
createInstance();


/*const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
      {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
  }*/
   