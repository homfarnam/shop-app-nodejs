const Product = require('../models/single-product')


const products = [];

module.exports.addProductPage = (req, res) => {
    res.render("admin/add-product", {
        pageTitle: "اضافه کردن محصول"
    });
};

module.exports.sendAllProducts = (req, res) => {
    // products.push({ title: req.body.title });

    const products = new Product(req.body.title)
    products.saveProductData()
    res.redirect("/");
};

module.exports.getAllProducts = (req, res) => {
    Product.fetchAllProduct((products) => {
        res.render("shop/product-list", {
            pageTitle: "فروشگاه",
            productsArray: products
        });
    })

};