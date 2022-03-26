module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('categories', [
        {
            name: "Laptop",
            slug: 'laptop',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Bàn phím",
            slug: 'ban-phim',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Linh kiện",
            slug: 'linh-kien',
            createdAt: new Date(),
            updatedAt: new Date()
        },
      ]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('categories', null, {});
    }
  };