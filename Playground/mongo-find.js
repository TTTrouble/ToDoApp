var { MongoClient, ObjectID } = require('mongodb');

const uri = "mongodb+srv://vmanne:caller@testdb-kj85h.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('DB-ToDo');

    // db.collection('ToDos').find({
    //     _id: new ObjectID('5c6b394fd54bbf1ad0ddeb1f')
    // }).toArray().then((docs) => {
    //     console.log('ToDos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, err => {
    //     console.log('Unable to fetch todos', err);

    // });

    db.collection('ToDos').find().count().then((count) => {
        console.log(`Number of Todos: ${count}`);
    }, err => {
        console.log('Unable to fetch number of todos', err);

    });


    client.close();
});