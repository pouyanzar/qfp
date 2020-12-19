'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('Model', {
    name: DataTypes.STRING,
    make_id: DataTypes.INTEGER
  }, {
    underscored: true,
    timestamps:false
  });
  Model.associate = function(models) {
    // associations can be defined here
    Model.belongsToMany(models.Category, {through: 'modelcats', foreignKey:'model_id', otherKey: 'cat_id'});
    Model.belongsTo(models.Make, {foreignKey:'make_id'});
  };
  return Model;
};