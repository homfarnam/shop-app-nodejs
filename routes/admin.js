const path = require("path");

const express = require("express");

const adminControllers = require("../controllers/admin");

const router = express.Router();

router.get("/add-product", adminControllers.addProductPage);

router.get('/products', adminControllers.getProducts)

router.post("/add-product", adminControllers.sendProducts);




module.exports = router;