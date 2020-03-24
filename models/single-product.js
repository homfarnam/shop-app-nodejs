const fs = require('fs')

const path = require('path')



module.exports = class Product {
    constructor(title) {
        this.title = title

    }

    saveProductData() {
        const filepath = path.join(path.dirname(process.mainModule.filename),
            'data', 'product.json')
        fs.readFile(filepath, (err, fileContent) => {
            let products = []

            if (!err) {
                products = JSON.parse(fileContent)
            }

            products.push(this)
            fs.writeFile(filepath, JSON.stringify(products), (err) => {
                console.log(err)

            })
        })
    }

    static fetchAllProduct(cb) {
        const filepath = path.join(path.dirname(process.mainModule.filename),
            'data', 'product.json')
        fs.readFile(filepath, (err, fileContent) => {
            if (err) {
                cb([])
            }
            cb(JSON.parse(fileContent))
        })
    }
};