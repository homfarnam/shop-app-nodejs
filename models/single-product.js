const fs = require("fs");

const path = require("path");

const Cart = require('./cart')

const filepath = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "product.json"
);

const getProductsFromFile = cb => {
    fs.readFile(filepath, (err, fileContent) => {
        if (err) {
            cb([]);
        }
        cb(JSON.parse(fileContent));
    });
};

module.exports = class Product {
    constructor(title, description, price) {
        this.title = title;
        this.description = description;
        this.price = price;
    }

    saveProductData() {
        this.id = Math.floor(Math.random() * 10);

        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(filepath, JSON.stringify(products), err => {
                console.log(err);
            });
        });
    }

    static deleteProductData(id) {

        getProductsFromFile((products) => {
            const product = products.find(p => p.id == id)

            const updatedProducts = products.filter(p => {
                return p.id !== id
            })

            fs.writeFile(filepath, JSON.stringify(updatedProducts), (err) => {
                if (!err) {
                    Cart.deleteProduct(id, product.price)
                }
            })
        })
    }

    static fetchAllProduct(cb) {
        getProductsFromFile(cb);
    }

    static fetchOneProduct(id, cb) {
        getProductsFromFile(products => {
            const oneProduct = products.find(p => p.id == id);

            cb(oneProduct);
        });
    }
};