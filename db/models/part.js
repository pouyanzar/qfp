'use strict';
module.exports = (sequelize, DataTypes) => {
  const Part = sequelize.define('Part', {
    qfpp: DataTypes.STRING,
    cat_id: DataTypes.INTEGER,
    related_part: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    img: DataTypes.STRING,
    start_year: DataTypes.INTEGER,
    end_year: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  Part.associate = function(models) {
    // associations can be defined here
  };
  return Part;
};