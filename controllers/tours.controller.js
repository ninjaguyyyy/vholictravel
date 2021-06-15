module.exports = {
  detail: async (req, res) => {
    console.log("vo");
    // let products = await Product.find().populate({
    //   path: "category",
    //   model: "Category",
    // });
    // products = products.filter((product) => product.isAvailable).slice(0, 6);
    // res.render("home", { products });
    const product = {
      images: ["1", "2"],
      title: "a",
      category: { title: "cac" },
      rate: 3,
      comments: [],
      description: "de",
      isAvailable: true,
      price: 2,
    };
    res.render("detail", { product });
  },
};
