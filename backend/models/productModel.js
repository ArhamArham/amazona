import Mongoose from "mongoose";

const productSchema=new Mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String,required:true},
    brand:{type:String,required:true},
    price:{type:Number,default:0,required:true},
    category:{type:String,required:true},
    countInStock:{type:Number,default:0,required:true},
    description:{type:String,required:true},
    rating:{type:Number,default:0,required:true},
    numReviews:{type:Number,default:0,required:true},
})

const productModel=Mongoose.model("Product",productSchema);

export default productModel;