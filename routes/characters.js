const express = require('express');

const router = express.Router();

const characterController = require('../controllers/character');

router.get('/init', characterController.saveCharacters);

router.get('/characters', (req, res, next) => {
    res.status(200).send('<h1>Characters</h1>');
});

module.exports = router;
