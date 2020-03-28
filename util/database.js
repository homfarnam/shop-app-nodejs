const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbName = 'OnlineShop'

let dbSet

const mongodbConnect = (cb) => {

    MongoClient.connect(connectionUrl, { useNewUrlParser: true })
        .then(client => {
            console.log('connected!');
            dbSet = client.db(dbName)
            cb(client)
        })
        .catch(err => {
            console.log(err);
            throw err

        })
}


const getDB = () => {
    if (dbSet) {
        return dbSet
    }
    throw 'No database found!'
}


exports.mongodbConnect = mongodbConnect


exports.getDB = getDB