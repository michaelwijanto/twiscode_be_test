"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "transaksis",
      [
        {
          Tanggal_order: new Date(2022, 1, 5),
          Status_pelunasan: "lunas",
          Tanggal_pembayaran: new Date(2022, 1, 6),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Tanggal_order: new Date(2022, 3, 10),
          Status_pelunasan: "pending",
          Tanggal_pembayaran: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("transaksis", null, {});
  },
};
