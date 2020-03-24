const Product = require('../models/single-product');


module.exports.addProductPage = (req, res) => {
    res.render("admin/add-product", {
        pageTitle: "اضافه کردن محصول"
    });
};

module.exports.sendProducts = (req, res) => {

    const products = new Product(req.body.title)
    products.saveProductData()
    res.redirect("/");
};


module.exports.getProducts = (req, res) => {
    Product.fetchAllProduct((products) => {
        res.render("admin/products", {
            pageTitle: "محصولات ادمین",
            productsArray: products
        });
    })
}