'use strict';
module.exports = (sequelize, DataTypes) => {
  const Oem = sequelize.define('Oem', {
    name: DataTypes.STRING,
    part_id: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  Oem.associate = function(models) {
    // associations can be defined here
  };
  return Oem;
};