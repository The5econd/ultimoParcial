var express = require('express'),
    router = express.Router(),
    var controller = require('../controllers/postController');

router.get('/:id', controller.get);

router.delete('/:id', controller.remove);