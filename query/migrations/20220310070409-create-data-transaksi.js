"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("DataTransaksis", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Id_transaksi: {
        type: Sequelize.INTEGER,
        references: {
          model: "transaksis",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      Harga: {
        type: Sequelize.INTEGER,
      },
      Jumlah: {
        type: Sequelize.INTEGER,
      },
      Subtotal: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("DataTransaksis");
  },
};
