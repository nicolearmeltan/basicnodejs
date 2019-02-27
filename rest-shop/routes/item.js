const express = require('express');
var item = express.Router();

item
    .get('/products', (req, res, next) => {
        res.send('HELLO')
    })
    .post('/product',(req, res, next) => {
        res.send('POST')
    })



module.exports = item;