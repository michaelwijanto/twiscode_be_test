"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transaksi.hasOne(models.DataTransaksi, { foreignKey: "Id_transaksi" });
    }
  }
  transaksi.init(
    {
      Tanggal_order: DataTypes.DATE,
      Status_pelunasan: DataTypes.STRING,
      Tanggal_pembayaran: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "transaksi",
    }
  );
  return transaksi;
};
