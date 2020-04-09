module.exports = (sequelize, DataTypes) => {
  var Photo = sequelize.define("Photos", {
    image: DataTypes.BLOB("long"),
    caption: DataTypes.TEXT,
  });
  return Photo;
};
