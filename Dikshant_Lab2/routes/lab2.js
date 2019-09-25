'use strict';
var express = require('express');
var router = express.Router();

/* GET home pages. */
router.get('/', function (req, res) {
    if (req.query.method) {

        var x = parseInt(req.query.x);
        var y = parseInt(req.query.y);
        if (req.query.method === 'add') {
            var addition = x + y;
            res.send("The Addition of your values entered is:" + req.query.x + " + " + req.query.y + " = " + addition.toString());
        }
        if (req.query.method == 'subtract') {
            var subtraction = x - y;
            res.send("The Subtraction of your values entered is:" + req.query.x + " - " + req.query.y + " = " + subtraction.toString());
        }
        if (req.query.method === 'multiply') {
            var multiplication = x * y;
            res.send("The Multiplication of your values entered is:" + req.query.x + " * " + req.query.y + " = " + multiplication.toString());
        }
        if (req.query.method === 'divide') {
            var division = x / y;
            res.send("The Division of your values entered is:" + req.query.x + " / " + req.query.y + " = " + division.toString());
        }
    } else {
        res.send('Math');
    }
});

module.exports = router;

