const tours = require("../configs/tours");

module.exports = {
  index: (req, res) => {
    res.render("home", { tours });
  },
};
