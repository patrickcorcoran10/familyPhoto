module.exports = (sequelize, DataTypes) => {
  var Photo = sequelize.define("Photos", {
    image: DataTypes.STRING,
    caption: DataTypes.STRING,
  });
  return Photo;
};
