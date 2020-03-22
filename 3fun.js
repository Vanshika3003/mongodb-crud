// Connection URL
const url = "mongodb://127.0.0.1:27017";
const MongoClient = require("mongodb").MongoClient;
// Database Name
const dbName = "students";

const dataToBeInserted = [
  {
    employeeId: 101,
    name: "Dikshit",
    address: "552 sec5",
    bloodgp: "b+"
  },
  {
    employeeId: 102,
    name: "vanshika",
    address: "672 sec2",
    bloodgp: "o+"
  },
  {
    employeeId: 103,
    name: "madhu",
    address: "5521 sec25",
    bloodgp: "a+"
  }
];

const createConnection = () => {
  //Make a promise
  return new Promise((res, rej) => {
    MongoClient.connect("mongodb://127.0.0.1:27017", (err, client) => {
      if (err) {
        console.log(err, err.stack);
        rej(err);
      } else {
        res(client);
      }
    });
  });
  //Resolve -- client
};

//const dbName = 'students';
const databaseAndTable = client => {
  return new Promise((res, rej) => {
    const db = client.db(dbName);
    const collection = db.collection("students");
    res(collection);
  });
};

const insertMany = collection => {
  return new Promise((res, rej) => {
    collection.insertMany(dataToBeInserted, (err, client) => {
      if (err) {
        console.log(err, err.stack);
        rej(err);
      } else {
        res(collection);
      }
    });
  });
};
const updateData = collection => {
  return new Promise((res, rej) => {
    //const db = collection.db(dbName);
    collection.updateOne({ name: "vanshika" }, { $set: { address: "151 sec3" } },(err,client)=>{
      if (err) {
        console.log(err, err.stack);
        rej(err);
      } else {
        res('done');
      }
    })
  });
};
const deleteData = collection => {
  return new Promise((res, rej) => {
    //const db = collection.db(dbName);
    collection.deleteOne({ name: "vanshika" },(err,client)=>{
      if (err) {
        console.log(err, err.stack);
        rej(err);
      } else {
        res('done');
      }
    })
  });
};

//db.Schools.updateOne({ name: "ABC" }, { $set: { rollNo: 15 } })
async function run() {
 const client = await createConnection();
  //console.log("C;lient is...", client);

  const collection = await databaseAndTable(client);
  //console.log("collection is...", collection);

  //await insertMany(collection);
  await updateData(collection);
  await deleteData(collection);
}
run();
