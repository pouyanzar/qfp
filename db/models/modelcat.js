'use strict';
module.exports = (sequelize, DataTypes) => {
  // const Model = sequelize.define('Model',{}),
  //   Category = sequelize.define('Category',{});

  const Modelcat = sequelize.define('modelcats', {
    model_id: DataTypes.INTEGER,
    cat_id: DataTypes.INTEGER,
    
  }, {
    underscored: true,
    timestamps:false,
    tableName: 'modelcats'
  });

  Modelcat.associate = function(models) {
    // associations can be defined here
    

  };
  return Modelcat;
};