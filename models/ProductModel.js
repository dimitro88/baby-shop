const mongoose = require('mongoose');
const _ = require('lodash');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    name : {type : String , required : true},
    price : {type: Number , required : true},
    xSize : {type : String , required : true},
    obhvatTalii : {type : String , required : true},
    length : {type: String , required : true},
    photo : {type : String , required : true},
    categoryId : {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      refPath: '_id',
      default: null, },
  },
  {
    collection: 'products',
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updateAt',
    }
});

productSchema.methods.toJSON = function(){
  let product = this.toObject();
  return {
    ..._.omit(product, ['__v'])
  }
};

const Product = mongoose.model("Product",productSchema);
module.exports = Product;
