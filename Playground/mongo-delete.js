var { MongoClient } = require('mongodb');

const uri = "mongodb+srv://vmanne:caller@testdb-kj85h.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('DB-ToDo');

    // deleteMany
    db.collection('ToDos').deleteMany({ text: 'Eat lunch' }).then((result) => {
        console.log(result);
    });

    // deleteOne
    db.collection('ToDos').deleteOne({ text: 'Eat Lunch' }).then((result) => {
        console.log(result);
    });
    // findOneAndDelete
    db.collection('ToDos').findOneAndDelete({ completed: false }).then((result) => {
        console.log(result);
    });

    // client.close();

});