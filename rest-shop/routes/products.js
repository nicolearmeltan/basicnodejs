const express = require('express');
var product = express.Router();

product
.get('/products', (req, res, next) => {
    res.send('HELLO')
})
.post('/product',(req, res, next) => {
    res.send('POST')
})


module.exports = product;