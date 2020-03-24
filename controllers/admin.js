const Product = require('../models/single-product');


module.exports.addProductPage = (req, res) => {
    res.render("admin/add-product", {
        pageTitle: "اضافه کردن محصول"
    });
};

module.exports.sendProducts = (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const price = req.body.price

    const products = new Product(title, description, price)

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