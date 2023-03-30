require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const mongoose = require('mongoose');

const characterRoutes = require('./routes/characters');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
    res.status(200).send('<h1>Hello World</h1>');
});

app.use('/characters', characterRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not Found</h1>');
});

const startServer = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.glswpyr.mongodb.net/?retryWrites=true&w=majority`
        );
        app.listen(3000);
        console.log('Server started successfully');
    } catch (err) {
        console.log(err);
    }
};

startServer();
