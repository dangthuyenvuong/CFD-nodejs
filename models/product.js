'use strict';
const {
  Model
} = require('sequelize');
const Brand = require('./Brand.js')
const Category = require('./Category.js')
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Brand.hasMany(models.Product)
      // Category.hasMany(models.Product)

      models.Product.belongsTo(Brand)
      models.Product.belongsTo(Category)

      // Brand.belongsTo(models.User, {
      //   onDelete: "CASCADE",
      //   foreignKey: {
      //     allowNull: false
      //   }
      });
    }
  };
  Product.init({
    name: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    shortDescription: DataTypes.STRING,
    regularPrice: DataTypes.NUMBER,
    finalPrice: DataTypes.NUMBER,
    slug: DataTypes.STRING,
    media: DataTypes.STRING,
    question: DataTypes.STRING,
    sku: DataTypes.STRING,
    inventoryCount: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'products',
  });
  return Product;
};