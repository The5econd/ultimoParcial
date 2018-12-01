var express = require('express'),
    router = express.Router(),
    controller = require('../controllers/postController');


router.get('/', controller.getAll);


router.get('/:id', controller.get);

router.delete('/:id', controller.remove);