//object destructuring
const { MongoClient, ObjectID } = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    //for v3
    // (err, client)

    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //for v3
    //const db = client.db('ToDoApp');

    //returns array , no condn for find
    // db.collection('Todos').find({ completed: false }).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    //return array with a condition in find
    // db.collection('Todos').find({
    //     _id: new ObjectID('5bcb28c950c8993f5412b3f0')
    // }).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 4));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // })

    //return count
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count : ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // })

    db.collection('Users').find({
        name: 'Abhishek',
        location: 'Pune'
    }).toArray().then((docs) => {
        // console.log(`Todos count : ${count}`);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.close();
    //for v3
    //client.close();
});