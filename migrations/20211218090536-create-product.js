'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      thumbnail: {
        type: Sequelize.STRING
      },
      shortDescription: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      regularPrice: {
        type: Sequelize.INTEGER
      },
      finalPrice: {
        type: Sequelize.INTEGER
      },
      slug: {
        type: Sequelize.STRING
      },
      media: {
        type: Sequelize.STRING
      },
      question: {
        type: Sequelize.STRING
      },
      sku: {
        type: Sequelize.STRING
      },
      inventoryCount: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

     queryInterface.addColumn(
      'products', // name of Source model
      'category_id', // name of the key we're adding 
      {
        type: Sequelize.NUMBER,
        references: {
          model: 'Product', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        // onUpdate: 'CASCADE',
        // onDelete: 'SET NULL',
      }
    );
     queryInterface.addColumn(
      'products', // name of Source model
      'brand_id', // name of the key we're adding 
      {
        type: Sequelize.NUMBER,
        references: {
          model: 'Product', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        // onUpdate: 'CASCADE',
        // onDelete: 'SET NULL',
      }
    );

    return;
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};