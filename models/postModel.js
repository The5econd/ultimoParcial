const mongoose = require('mongoose');
const {schema} = mongoose.Schema;

let postModel = new mongoose.Schema({
    materia: {
        type: String
    },
    uv: String,
    descripcion: String
})

module.exports = mongoose.model('post', postModel);