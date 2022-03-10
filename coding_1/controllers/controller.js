class Controller {
  static binary(req, res, next) {
    const { input } = req.body;
    const temp = String(input);
    let count = temp.length;
    let result = 0;
    temp.split("").forEach((el) => {
      result += el * 2 ** --count;
    });
    // return temp;
    res.status(200).json(result);
  }
}

module.exports = Controller;
