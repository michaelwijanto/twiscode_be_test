"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DataTransaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DataTransaksi.belongsTo(models.transaksi, { foreignKey: "Id_transaksi" });
    }
  }
  DataTransaksi.init(
    {
      Id_transaksi: DataTypes.INTEGER,
      Harga: DataTypes.INTEGER,
      Jumlah: DataTypes.INTEGER,
      Subtotal: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "DataTransaksi",
    }
  );
  return DataTransaksi;
};
