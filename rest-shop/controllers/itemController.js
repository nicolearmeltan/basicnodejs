const db = require("../models/index");
const Item = db.items;

exports.addItem = (req, res) => {
  Item.create({
    itemName: req.body.itemName,
    itemType: req.body.itemType,
    quantity: req.body.quantity,
    price: req.body.price
  })
    .then(response => {
      res.status(201).send(response);
    })
    .catch(error => {
      res.status(404).send(error.message);
    });
};

exports.getAllItem = (req, res) => {
  Item.findAll()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(404).send(error.message);
    });
};

exports.getItemById = (req, res) => {
  Item.findByPk(req.params.itemId)
    .then(response => {
      res.status(201).send(response);
    })
    .catch(error => {
      res.status(404).send(error.message);
    });
};

exports.updateItem = (req, res) => {
  const itemId = req.params.itemId;
  Item.update(
    {
      itemName: req.body.itemName,
      itemType: req.body.itemType,
      quantity: req.body.quantity,
      price: req.body.price
    },
    { where: { itemId: itemId } }
  ).then(() => {
      res.status(201).send('Item Successfully Updated.');
  }).catch(error => {
    res.status(404).send(error.message);
  });
};

exports.deleteItem = (req, res) => {
    const itemId = req.params.itemId;
    Item.destroy({ where: { itemId: itemId } }
    ).then(() => {
        res.status(201).send('Item Successfully Deleted.');
    }).catch(error => {
      res.status(401).send(error.message);
    });
  };


