var express = require('express'),
    burger = require('../models/burger'),
    router = express.Router();

router.get('/', (req, res) => {
    burger.selectALL(function (data) {
        var dataObject = {
            burgers: data
        };

        for (var i = 0; i < dataObject.burgers.length; i++) {
            dataObject.burgers[i].devoured = parseInt
            (dataObject.burgers[i].devoured);
        }
        res.render('index', dataObject);
    });
});

router.post('/', (req, res) => {
    burger.insertOne(req.body.burgerInput);
    res.redirect('/');
});

router.put('/:id', (req, res) => {
    burger.updateOne(req.params.id);
    res.redirect('/');
});

module.exports = router;