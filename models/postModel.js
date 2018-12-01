const mongoose = require('mongoose'),
const postModel =mongoose.Schema;

var data = new Schema({
    materia: {
        type: String
    },
    uv: String,
    descripcion: String
})

module.exports = mongoose.Model('post', postModel);