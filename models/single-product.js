const fs = require('fs')

const path = require('path')
const filepath = path.join(path.dirname(process.mainModule.filename),
    'data', 'product.json')


const getProductsFromFile = (cb) => {

    fs.readFile(filepath, (err, fileContent) => {
        if (err) {
            cb([])
        }
        cb(JSON.parse(fileContent))
    })
}

module.exports = class Product {
    constructor(title, description, price) {
        this.title = title
        this.description = description
        this.price = price


    }

    saveProductData() {
        this.id = Math.floor(Math.random() * 10)

        getProductsFromFile((products) => {
            products.push(this)
            fs.writeFile(filepath, JSON.stringify(products), (err) => {
                console.log(err)

            })
        })

    }

    static fetchAllProduct(cb) {
        getProductsFromFile(cb)
    }

    static fetchOneProduct(id, cb) {
        getProductsFromFile((products) => {
            const oneProduct = products.find((p) => {
                return p.id === id
            })
            cb(oneProduct)
        })
    }
};