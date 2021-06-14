module.exports = {
  index: async (req, res) => {
    // let products = await Product.find().populate({
    //   path: "category",
    //   model: "Category",
    // });
    // products = products.filter((product) => product.isAvailable).slice(0, 6);
    // res.render("home", { products });
    res.render("home");
  },
};
