'use strict';
module.exports = (sequelize, DataTypes) => {
  const roleModel = sequelize.define('role', {
  roleId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  role: {
      type: DataTypes.STRING(30),
      allowNull: false
  },
  
  }, {});
  roleModel.associate = function(models) {
    // associations can be defined here
  };
  return roleModel;
};
