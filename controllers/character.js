require('dotenv').config();

const axios = require('axios');

const Character = require('../models/character');

const base = require('../util/constants');

const fetchCharacters = async () => {
    try {
        const response = await axios.get(
            `${base.uri}/v1/public/characters?ts=${process.env.MARVEL_TS}&apikey=${process.env.MARVEL_PUBLIC_KEY}&hash=${process.env.MARVEL_HASH}`
        );
        const characters = response.data.data.results.slice(0, 5);

        for (const characterData of characters) {
            const character = new Character({
                name: characterData.name,
                description: characterData.description,
            });
            await character.save();
        }
    } catch (error) {
        console.error(error);
    }
};

exports.saveCharacters = async (req, res, next) => {
    try {
        const characters = await Character.find();
        if (characters.length === 0) {
            await fetchCharacters();
            res.status(200).send('Characters saved successfully.');
        } else {
            res.status(200).send('Characters already exist.');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while saving characters.');
    }
};

exports.getAllCharacters = async (req, res, next) => {
    try {
        const characters = await Character.find();
        res.status(200).json(characters);
    } catch (error) {
        res.status(404).json({ message: 'No characters found' });
    }
};

exports.postCharacter = async (req, res, next) => {
    try {
        const { name, description } = req.body;

        const character = new Character({
            name,
            description,
        });

        await character.save();

        res.status(200).send('Character created successfully.');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating a character' });
    }
};

exports.updateCharacter = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        const character = await Character.findByIdAndUpdate(
            id,
            { name, description },
            { new: true }
        );

        if (!character) {
            return res.status(404).json({ error: 'Character not found' });
        }

        res.json(character);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.deleteCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCharacter = await Character.findByIdAndDelete(id);
        if (!deletedCharacter) {
            return res.status(404).json({ error: 'Character not found' });
        }
        return res.status(204).end('No Content');
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
