"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "DataTransaksis",
      [
        {
          Id_transaksi: 2,
          Harga: 150000,
          Jumlah: 5,
          Subtotal: 150000 * 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Id_transaksi: 3,
          Harga: 7000,
          Jumlah: 25,
          Subtotal: 7000 * 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("DataTransaksis", null, {});
  },
};
