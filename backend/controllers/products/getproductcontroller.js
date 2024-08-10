const mongoose = require("mongoose");
const productcollection = require("../../models/ProductSchema");
const getproductcontroller = async (req, res) => {
  try {
    const {genre} = req.params;
    let product;
     if (genre) {
       const searchgenre = genre.toLowerCase();
       product = await productcollection.find({
         genre: { $regex: new RegExp(searchgenre, "i") },
       });
     } 
     
     else {
       product = await productcollection.find()
     }

     res.status(200).send(product);

    if (!product || product.length === 0) 
      res.status(404).send({ message: "No products found" });
    
    
    
    console.log("Product fetched successfully");
  } catch (error) {
    res.status(500).send({ message: "Error in fetching data" });
    console.error(`Error occurred: ${error}`);
  }
};
module.exports = getproductcontroller;
