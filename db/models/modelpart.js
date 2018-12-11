'use strict';
module.exports = (sequelize, DataTypes) => {
  const ModelPart = sequelize.define('ModelPart', {
    model_id: DataTypes.STRING,
    part_id: DataTypes.STRING
  }, {
    underscored: true,
    timestamps:false
  });
  ModelPart.associate = function(models) {
    // associations can be defined here
    
  };
  return ModelPart;
};