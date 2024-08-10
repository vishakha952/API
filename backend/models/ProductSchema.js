const mongoose = require("mongoose");
const ProductSchema =new mongoose.Schema({
    
    
        year:{
          type:Number,
          required:true,
          
        } ,
        director:{
            type:String,
            required:true,
        } ,
        cast: {
            type:Array,
            required:true,
        },
        title:{
            type:String,
            required:true,
        },
      genre:{
        type:Array,
        required:true,
      },
       
        runtime:{
         type:Number,
         required:true,
        } ,
        
        language:{
            type:String,
            required:true,
        } ,
        rating:{
        type:Number,
        required:true,
        } ,
        plot:{
            type:String,
            required:true,
        } ,
          
});
const ProductCollection =mongoose.model("products",ProductSchema);
module.exports = ProductCollection;