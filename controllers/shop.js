const Product = require('../models/single-product')





module.exports.getAllProducts = (req, res) => {
    Product.fetchAllProduct((products) => {
        res.render("shop/product-list", {
            pageTitle: "فروشگاه",
            productsArray: products
        });
    })

};


module.exports.getIndex = (req, res) => {
    Product.fetchAllProduct((products) => {
        res.render("shop/index", {
            pageTitle: "همه محصولات",
            productsArray: products
        });
    })
}


module.exports.getCart = (req, res) => {
    res.render('shop/cart', {
        pageTitle: 'سبد خرید'
    })
}

module.exports.getCheckout = (req, res) => {
    res.render('shop/checkout', {
        pageTitle: 'تسویه حساب'
    })
}