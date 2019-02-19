var { MongoClient, ObjectID } = require('mongodb');

const uri = "mongodb+srv://vmanne:caller@testdb-kj85h.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('DB-ToDo');

    // db.collection('ToDos').findOneAndUpdate({
    //     _id: new ObjectID('5c6b3e9c1c9d440000da3df7')
    // }, {
    //     $set: {completed: true}
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Could not perform find and update', err);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c6b3abed223c61af45ca922')
    }, {
        $set: {name: 'Vijay'},
        $inc: {age: 1}
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Could not perform find and update', err);
    });


    client.close();
});