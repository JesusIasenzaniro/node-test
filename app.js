require('dotenv').config();

const express = require('express');

const app = express();

const mongoose = require('mongoose');

app.get('/', (req, res, next) => {
    res.status(200).send('<h1>Hello World</h1>');
});

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not Found</h1>');
});

mongoose
    .connect(
        `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.glswpyr.mongodb.net/?retryWrites=true&w=majority`
    )
    .then((result) => {
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });
