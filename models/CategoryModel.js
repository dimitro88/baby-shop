const mongoose = require('mongoose');
const _ = require('lodash');
const Schema = mongoose.Schema;
const categorySchema = new Schema({
  name : {type : String , required : true},
  photo : {type : String , required : true},
  sexType : {type : String, enum : ["boy","girl"],required : true , default : null},
},
  {
    collection: 'category',
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updateAt',
    }
});

categorySchema.methods.toJSON = function(){
  let category = this.toObject();
  return {
    ..._.omit(category, ['__v'])
  }
};

const Category = mongoose.model("Category",categorySchema);
module.exports = Category;