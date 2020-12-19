'use strict';
module.exports = (sequelize, DataTypes) => {
  const Part = sequelize.define('parts', {
    qfpp: DataTypes.STRING,
    cat_id: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    img: DataTypes.STRING,
    start_year: DataTypes.INTEGER,
    end_year: DataTypes.INTEGER
  }, {
    underscored: true,
    timestamps:false
  });
  Part.associate = function(models) {
    // associations can be defined here
    Part.belongsTo(models.Category,{foreignKey: 'cat_id'});
    Part.belongsTo(models.Model, {foreignKey: 'model_id'});
  };
  return Part;
};