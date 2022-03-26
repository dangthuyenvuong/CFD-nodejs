module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('brands', [
        {
            name: "Samsung",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Apple",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Xiaomi",
            createdAt: new Date(),
            updatedAt: new Date()
        },
      ]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('brands', null, {});
    }
  };