// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
  if(err)
  {
    return console.log('Unable to connect to mongodb Server');
  }
  console.log('Connected to MongoDB Server');

  const db = client.db('TodoApp');

  // db.collection('Todos').find({}).toArray().then((docs) =>{
  //     console.log("Todos");
  //     console.log(JSON.stringify(docs,undefined,2));
  // },(err) =>{
  //   console.log('Unable to fetch Todos',err);
  // });

// db.collection('Todos').find({}).count().then((count) =>{
//   console.log(`Todos Count : ${count}`);
// },(err) =>{
//   console.log('Unable to fetch Todos');
// });

db.collection('Users').find({Name :'Nikhil'}).toArray().then((docs) =>{
      console.log("Users");
      console.log(JSON.stringify(docs,undefined,2));
  },(err) =>{
    console.log('Unable to fetch Todos',err);
  })

db.collection('Users').find({Name :'Nikhil'}).count().then((count) =>{
  console.log(`Users Count : ${count}`);
},(err) =>{
  console.log('Unable to fetch Todos');
});

  client.close();
});
