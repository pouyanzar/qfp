'use strict';
module.exports = (sequelize, DataTypes) => {
  const Make = sequelize.define('Make', {
    name: DataTypes.STRING
  }, {
    underscored: true,
    timestamps:false
  });
  Make.associate = function(models) {
    // associations can be defined here
  };
  return Make;
};