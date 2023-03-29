const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const characterSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        default: '',
    },
    modified: {
        type: Date,
        required: true,
    },
    thumbnail: {
        path: {
            type: String,
            required: true,
        },
        extension: {
            type: String,
            required: true,
        },
    },
    resourceURI: {
        type: String,
        required: true,
    },
    comics: {
        available: {
            type: Number,
            required: true,
        },
        collectionURI: {
            type: String,
            required: true,
        },
        items: [
            {
                resourceURI: {
                    type: String,
                    required: true,
                },
                name: {
                    type: String,
                    required: true,
                },
            },
        ],
        returned: {
            type: Number,
            required: true,
        },
    },
    series: {
        available: {
            type: Number,
            required: true,
        },
        collectionURI: {
            type: String,
            required: true,
        },
        items: [
            {
                resourceURI: {
                    type: String,
                    required: true,
                },
                name: {
                    type: String,
                    required: true,
                },
            },
        ],
        returned: {
            type: Number,
            required: true,
        },
    },
    stories: {
        available: {
            type: Number,
            required: true,
        },
        collectionURI: {
            type: String,
            required: true,
        },
        items: [
            {
                resourceURI: {
                    type: String,
                    required: true,
                },
                name: {
                    type: String,
                    required: true,
                },
                type: {
                    type: String,
                    required: true,
                },
            },
        ],
        returned: {
            type: Number,
            required: true,
        },
    },
});

module.exports = mongoose.model('Character', characterSchema);
