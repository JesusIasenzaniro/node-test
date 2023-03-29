const express = require('express');

const app = express();

const charactersRoutes = require('./routes/characters');

app.use(charactersRoutes);

app.listen(3000);
