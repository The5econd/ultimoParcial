const mongoose = require('mongoose');

let postModel = new mongoose.Schema({
    materia: {
        type: String
    },
    uv: String,
    descripcion: String
})

module.exports = mongoose.model('post', postModel);