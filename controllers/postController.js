var postModel = require('../models/postModel');

var controller = {};

controller.create = function (req, res) {
    let data = {
        materia: req.params.materia,
        uv: req.params.uv,
        descripcion: req.params.descripcion
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
        }
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
            res.json({ok: true, message = 'encontrado', post})
        }
    })
}

controller.delete = function(req, res){
    postModel.FindByIdAndRemove(req.params.id, function(err, eliminado){
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ok: true, message = 'se elimino correctamente', eliminado})
        }
    })
}