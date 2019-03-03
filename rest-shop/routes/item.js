const express = require("express");
let item = express.Router();
const items = require('../controllers/itemController');

item.get("/item", items.getAllItem);

item.get("/item/:itemId", items.getItemById);

item.post("/item", items.addItem);

item.put("/item/:itemId", items.updateItem);

item.delete("/item/:itemId", items.deleteItem);


module.exports = item;
