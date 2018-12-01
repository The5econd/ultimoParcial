const mongoose = require('mongoose');
postModel = mongoose.Schema;

let postModel = new Schema({
    materia: {
        type: String
    },
    uv: String,
    descripcion: String
})

module.exports = mongoose.module('post', postModel);