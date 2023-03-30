const express = require('express');

const router = express.Router();

const characterController = require('../controllers/character');

router.get('/init', characterController.saveCharacters);

router.get('/get-characters', characterController.getAllCharacters);

router.post('/post-character', characterController.postCharacter);

router.put('/update-character/:id', characterController.updateCharacter);

router.delete('/delete-character/:id', characterController.deleteCharacter);

module.exports = router;
