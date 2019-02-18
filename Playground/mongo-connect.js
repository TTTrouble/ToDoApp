// const MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb+srv://vmanne:caller@testdb-kj85h.mongodb.net/ToDoTestDB/test?retryWrites=true/', (err, client) => {
//     if (err) {
//         return console.log('Unable to connect to mongoDB server');
//     }
//     console.log('Connected to MongoDB server');
    
//     const db = client.db('ToDoApp');
    
//     db.collection('Todos').insertOne({
//         text: 'Something to do',
//         completed: false
//     }, (err, result) => {
//         if(err) {
//             return console.log('Unable to insert todo', err);
//         }
        
//         console.log(JSON.stringify(result.ops, undefined, 2));
//     });  

//     client.close();
// });

//const MongoClient = require('mongodb').MongoClient;


var {MongoClient} = require('mongodb');

const uri = "mongodb+srv://vmanne:caller@testdb-kj85h.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('DB-ToDo');

    // db.collection('ToDos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }
        
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    
    // db.collection('Users').insertOne({
    //     name: 'Jamal',
    //     age: 25,
    //     location: '1540 Vine St'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Could not add a user', err);
    //     }
        
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })


    client.close();
});