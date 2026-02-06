const productModel = require("../model/ProductModel");

const showProducts = async (req,resp) => {
    try {
        const result = await productModel.find();
        resp.json(result);
    } catch (error) {
        console.log(error);
    }
}

const addProduct = async (req,resp) => {
    try {
        const {pname, price, category} = req.body;
        const result = await productModel.create({pname, price, category});
        resp.json(result)
    } catch (error) {
        console.log(error);
    }
}

const updateProduct = async (req,resp) => {
    try {
        const result = await productModel.findByIdAndUpdate(req.params.id, req.body, {new : true});
        resp.json(result);
    } catch (error) {
        console.log(error);
    }
}

const deleteProduct = async (req,resp) => {
    try {
        const result = await productModel.findByIdAndDelete(req.params.id);
        resp.json(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {showProducts,addProduct,updateProduct,deleteProduct};