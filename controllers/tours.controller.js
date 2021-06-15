const tours = require("../configs/tours");

module.exports = {
  detail: (req, res) => {
    const id = req.params.id;
    const tour = tours.find((tour) => tour.id === +id);
    res.render("detail", { tour });
  },
};
