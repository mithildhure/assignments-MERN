const express = require('express');
const { showProducts, addProduct, updateProduct, deleteProduct } = require("../controller/ProductController");
const router = express.Router();

router.get("/",showProducts);
router.post("/addData",addProduct);
router.patch("/updateData/:id",updateProduct);
router.delete("/deleteData/:id",deleteProduct);

module.exports = router;
