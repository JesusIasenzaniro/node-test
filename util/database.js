require('dotenv').config();

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect(
        `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.glswpyr.mongodb.net/?retryWrites=true&w=majority`
    )
        .then((client) => {
            console.log('Connected');
            callback(client);
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = mongoConnect;
