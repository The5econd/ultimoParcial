var postModel = require('../models/postModel');

var controller = {};

controller.create = function (req, res) {
    let data = {
        id: req.params.id,
        franquicia: req.params.franq,
        nombre: req.params.nombre,
        gas: req.params.precio
    }

    if (data.materia && data.uv && data.descripcion && data.materia != '' && data.uv != '' && data.descripcion != '') {

        var nuevoPost = new postModel(data);

        nuevoPost.save = (function (err, guardado) {
            if (err) {
                res.status(500);
                res.json({ code: 500, err });
            } else {
                res.json({ ok: true, message: 'guardadooooo', guardado });
            }
        });
    } else {
        res.status(400);
        res.json({ err: { code: 400, message: 'falta data', data } })
    }
}

controller.get = function(req, res){
    postModel.findOne({_id: req.params.id}, function(err, post){
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ok: true, message: 'encontrado', post})
        }
    })
}

controller.getAll = function(req, res){
    postModel.findOne({}, function(err, posts){
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ok: true, message: 'aca estan los posts', posts})
        }
    })
}

controller.remove = function(req, res){
    postModel.FindByIdAndRemove(req.params.id, function(err, eliminado){
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ok: true, message: 'se elimino correctamente', eliminado})
        }
    })
}

controller.update = function(req, res){

    let data = {
        id: req.params.id,
        franquicia: req.params.franq,
        nombre: req.params.nombre,
        gas: req.params.precio
    }

    postModel.findByIdAndUpdate(req.params.id, old, function(err, data){
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ok: true, message: 'se actualizo correctamente', data})
        }
    })
}