'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        name: 'Laptop 1',
        thumbnail: "....",
        shortDescription: '....',
        regularPrice: 1000,
        finalPrice: 900,
        slug: 'laptop-1',
        media: '...;...',
        question: '....',
        description: 'Lorem test',
        sku: 'LT001',
        inventoryCount: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Laptop 2',
        thumbnail: "....",
        shortDescription: '....',
        regularPrice: 1000,
        finalPrice: 900,
        slug: 'laptop-1',
        media: '...;...',
        question: '....',
        description: 'Lorem test',
        sku: 'LT001',
        inventoryCount: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Laptop 3',
        thumbnail: "....",
        shortDescription: '....',
        regularPrice: 1000,
        finalPrice: 900,
        slug: 'laptop-1',
        media: '...;...',
        question: '....',
        description: 'Lorem test',
        sku: 'LT001',
        inventoryCount: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
