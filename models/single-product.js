const fs = require('fs')

const path = require('path')



module.exports = class Product {
    constructor(title) {
        this.title = title

    }

    saveProductData() {
        products.push(this)
    }

    static fetchAllProduct() {
        return products
    }
};