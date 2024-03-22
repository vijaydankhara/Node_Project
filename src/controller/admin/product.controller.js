const ProductServieces = require('../../services/product.service');
const productServieces =new ProductServieces();


exports.addNewProduct = async(req, res) => {
    try{
    let product = await productService.getProduct({title: req.body.title, isDelete: false})
        if(product){
return res.status(201).json({message: 'Product Is Alredy Exist...'});
        }
        product = await productService.addNewProduct({...res.body});
        res.status(201).json({product, meassage : `Product Added SuccesFully`}) 
    }catch(error) { 
console.log(error);
res.status(500).json({ meassage : `Internal Server Error!!!`});
    }
}; 

exports.getAllProducts = async (req,res)=> {
    try {
        let producs = await productServiece.getAllProducts(req.query);
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
res.status(500).json({ meassage : `Internal Server Error!!!`}); 
    }
};

exports.getProduct = async (req,res) =>{
    try {
       let product = await productService.getProductById(req.query.productId);
       if(!product) {
        return res.status(404).json({ message: 'Product Is Not Found...'});
       }
       res.status(200).json(product);
    } catch (error) {
        console.log(error);
res.status(500).json({ meassage : `Internal Server Error!!!`});
    }
};

exports.updateProduct = async (req,res) =>{
    try {
       let product = await productService.getProductById(req.query.productId);
       if(!product) {
        return res.status(404).json({ message: 'Product Is Not Found...'});
       }
       product = await productService.updateProduct(product._id, { ...req.body});
       res.status(202).json({ meassage : `Product is updated`});
    } catch (error) {
        console.log(error);
res.status(500).json({ meassage : `Internal Server Error!!!`});
    }
};

exports.deleteProduct = async(req, res) => {
    try {
        let product = await productService.getProductById(req.query.productId);
        if(!product){
            return res.status(404).json({message : `Product is Not Found...`});
        }
        product = await productService.updateProduct(product._id, { isDelete: true});
        res.status(200).json({product, message: `Product Is Deleted.`});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal Server Error`});
    }
}