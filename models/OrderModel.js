const mongoose = require('mongoose');
const _ = require('lodash');
const Schema = mongoose.Schema;
const orderSchema = new Schema({
  products : [{
    _id: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
    count : {type : Number},
    status: {type: String, enum: ["pending", "accepted", "rejected"], default: "pending"}
  }],
  totalCost : {type : Number},
  },
  {
  collection: 'orders',
    timestamps: {
    createdAt: 'createdAt',
      updatedAt: 'updateAt'
  }
});

orderSchema.methods.toJSON = function () {
  let order = this.toObject();
  return {
    type: 'order',
    id: order._id,
    attributes: _.omit(order, ['__v'])
  }
};

const Order = mongoose.model('Order',orderSchema);
module.exports = Order;