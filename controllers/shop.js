const Product = require('../models/single-product')





module.exports.getAllProducts = (req, res) => {
    Product.fetchAllProduct((products) => {
        res.render("shop/product-list", {
            pageTitle: "فروشگاه",
            productsArray: products
        });
    })

};

module.exports.getOneProduct = (req, res) => {
    const pId = req.params.productId

    Product.fetchOneProduct(pId, (product) => {
        res.render('shop/product-detail', {
            product: product,
            pageTitle: product.title
        })
    })

}


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


module.exports.getOrders = (req, res) => {
    res.render('shop/orders', {
        pageTitle: 'سفارشات'
    })
}