'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, {
    underscored: true,
    timestamps:false

  });
  Category.associate = function(models) {
    // associations can be defined here
    Category.belongsToMany(models.Model, {through: 'modelcats', foreignKey: 'cat_id', otherKey:'model_id'});
  };
  return Category;
};