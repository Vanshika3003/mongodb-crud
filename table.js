const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://127.0.0.1:27017';
 
// Database Name
const dbName = 'myproject';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
  const collection= db.collection('students');
  console.log('Collection',collection);

  collection.insertMany([
    {a : 1,c:1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    
  });
 
  client.close();
});

//1. FUNCTION - It will connect to DB
//2. Function - It will create a database in Mongo
//3. Function - It will insert data.


//SQL vs NoSQL
//SQL Example - EmployeeId,Name,Father name, Adress,Bloud Group(To be added)- We have to previously define every column. 
//NoSQL - We dont have to define any schema. You have any columns

const dataToBeInserted = [
    {
    employeeId : 101,
    name:'Dikshit'
    }
,{},{}]


const createConnection = () =>{
    //Make a promise
    //Resolve -- client
}

const databaseAndTable=(client) =>{

}

const insertData = (collection)=>{

}