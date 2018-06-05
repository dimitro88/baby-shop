const co = require('co');
const _ = require('lodash');

const Order = require('./../models/OrderModel');

class OrderRepository {
   addOrder(orderBody,userBody) {
    return co.call(this, function* () {
      console.log(userBody._doc.listOfProducts.toObject());
      orderBody.products = userBody._doc.listOfProducts.toObject();
      orderBody.totalCost = 0;
      orderBody.products.forEach(function(element){
        orderBody.totalCost +=  element.count * element.product.price;
      });
      let order = new Order(orderBody);
      return yield order.save();
    });
  }
}
module.exports = OrderRepository;