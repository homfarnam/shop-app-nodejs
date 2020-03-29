const Product = require("../models/single-product");

const Cart = require('../models/cart')

module.exports.getAllProducts = (req, res) => {
    Product.fetchAllProducts()
        .then(products => {
            res.render('shop/product-list', {
                productsArray: products,
                pageTitle: 'همه محصولات'
            })

        })
        .catch(err => {
            console.log(err);

        })
};

module.exports.getOneProduct = (req, res) => {
    const pId = req.params.productId;

    Product.fetchOneProduct(pId)
        .then(product => {
            res.render('shop/product-detail', {
                product: product,
                pageTitle: product.id
            })

        })
        .catch(err => {
            console.log(err);

        })
}

module.exports.getIndex = (req, res) => {
    Product.fetchAllProducts()
        .then(products => {
            res.render('shop/index', {
                productsArray: products,
                pageTitle: 'همه محصولات'
            })

        })
        .catch(err => {
            console.log(err);

        })
};

// module.exports.getCart = (req, res) => {
//     res.render("shop/cart", {
//         pageTitle: "سبد خرید"
//     });
// };

// module.exports.postCart = (req, res) => {
//     const pId = req.body.productId;

//     Product.fetchOneProduct(pId, (product) => {
//         Cart.addProduct(pId, product.price)
//     })

//     res.redirect("/cart");
// };

// module.exports.getCheckout = (req, res) => {
//     res.render("shop/checkout", {
//         pageTitle: "تسویه حساب"
//     });
// };

// module.exports.getOrders = (req, res) => {
//     res.render("shop/orders", {
//         pageTitle: "سفارشات"
//     });
// };