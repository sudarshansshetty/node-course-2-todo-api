// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
  if(err)
  {
    return console.log('Unable to connect to mongodb Server');
  }
  console.log('Connected to MongoDB Server');

  const db = client.db('TodoApp');

  db.collection('Users').deleteMany({Name : 'Sudarshan S Shetty'}).then((result)=>{
  console.log(result);
  });

  db.collection('Users').deleteOne({Name : 'Nikhil'}).then((result)=>{
  console.log(result);
  });

  db.collection('Users').findOneAndDelete({_id : 123}).then((result)=>{
  console.log(result);
  });

  client.close();
});
