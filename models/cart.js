const fs = require("fs");

const path = require("path");

const filepath = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "cart.json"
);

module.exports = class Cart {
    static addProduct(id, productPrice) {
        fs.readFile(filepath, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 };

            if (!err) {
                cart = JSON.parse(fileContent);
            }

            const existingProductIndex = cart.products.findIndex(p => p.id == id);

            console.log(cart.products);

            console.log(existingProductIndex);

            const existingProduct = cart.products[existingProductIndex];

            let updatedProduct;

            if (existingProduct) {
                updatedProduct = {...existingProduct };
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = { id: id, qty: 1 };
                cart.products = [...cart.products, updatedProduct];
            }

            cart.totalPrice = cart.totalPrice + +productPrice;

            fs.writeFile(filepath, JSON.stringify(cart), err => {
                console.log(err);
            });
        });
    }

    static deleteProduct(id, productPrice) {
        fs.readFile(filepath, (err, fileContent) => {
            if (err) {
                return;
            }
            const updatedCart = {...JSON.parse(fileContent) }

            const product = updatedCart.products.find(p => p.id == id);

            if (!product) {
                return;
            }

            const productQty = product.qty;

            updatedCart.products = updatedCart.products.filter(p => p.id !== id);

            updatedCart.totalPrice =
                updatedCart.totalPrice - productPrice * productQty;

            fs.writeFile(filepath, JSON.stringify(updatedCart), err => {
                console.log(err);
            });
        });
    }
};