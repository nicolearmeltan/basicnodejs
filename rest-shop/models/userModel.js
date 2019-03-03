'use strict';
module.exports = (sequelize, DataTypes) => {
  const userModel = sequelize.define('user', {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userName: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(120),
    allowNull: false
  },
  lastLoginDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW 
  }
  }, 
  {
    deletedAt: 'destroyTime',
    timestamps: true,
    freezeTableName: true
  });
  userModel.associate = function(models) {
    // associations can be defined here
  };
  return userModel;
};
