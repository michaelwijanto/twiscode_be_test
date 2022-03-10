const { transaksi, DataTransaksi } = require("../models");
class Controller {
  static async getData(req, res, next) {
    try {
      let dataTransaksi = await DataTransaksi.findAll({
        include: [
          {
            model: transaksi,
            attributes: ["Tanggal_order", "Status_pelunasan", "Tanggal_pembayaran"],
          },
        ],
        attributes: ["id", "Subtotal", "Jumlah"],
      });
      if (!dataTransaksi) {
        res.status(500).json({ message: "Internal server error" });
      }
      res.status(200).json(dataTransaksi);
    } catch (err) {
      {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  }
}

module.exports = Controller;
