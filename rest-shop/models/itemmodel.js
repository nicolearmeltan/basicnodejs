'use strict';
module.exports = (sequelize, DataTypes) => {
  const itemModel = sequelize.define('item', {
    itemId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  itemName: {
      type: DataTypes.STRING(120),
      allowNull: false
  },
  itemType: DataTypes.STRING(50),
  quantity: {
      type: DataTypes.DOUBLE,
      allowNull: false
  },
  price: {
      type: DataTypes.DOUBLE,
      allowNull: false
  }
  }, 
  { 
    deletedAt: 'destroyTime',
    timestamps: true,
    freezeTableName: true
  });
  itemModel.associate = function(models) {
    // associations can be defined here
  };
  return itemModel;
};
