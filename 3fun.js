// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const MongoClient = require('mongodb').MongoClient;
// Database Name
const dbName = 'students';
 
const dataToBeInserted = [
    {
    employeeId : 101,
    name:'Dikshit',
    address:'552 sec5',
    bloodgp:'b+'
    },
{
    employeeId:102,
    name:'vanshika',
    address:'672 sec',
    bloodgp:'o+'
},
{
    employeeId:103,
    name:'madhu',
    address:'5521 sec25',
    bloodgp:'a+' 
}
];


const createConnection = () =>{
    
    //Make a promise
     return  new Promise((res,rej)=>{
        MongoClient.connect("mongodb://127.0.0.1:27017", (err, client) => {
        if (err) {
            console.log(err, err.stack);
            rej(err);
          } else {
            res(client);
          }
       })
    });
    //Resolve -- client
}

//const dbName = 'students';
const databaseAndTable=(client) =>{
    return  new Promise((res,rej)=>{
        const db = client.db(dbName);
        const collection= db.collection('students',(err,client)=>{
            if (err) {
                console.log(err, err.stack);
                rej(err);
              } else {
                res(collection);
              }
            })
        });

}


const insertData = (collection)=>{
    return  new Promise((res,rej)=>{
collection.insertData(dataToBeInserted,(err,client)=>{
    if (err) {
        console.log(err, err.stack);
        rej(err);
      } else {
        res(collection);
      }
    })
    

});
}
function run()
{
    const client=createConnection();
  const collection= databaseAndTable(client);
    insertData(collection);
}
run();