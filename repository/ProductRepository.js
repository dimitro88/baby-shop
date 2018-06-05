const co = require('co');
const _ = require('lodash');

const Product = require('../models/ProductModel');
const dbHelper = require('../helpers/dbHelper');
const ForbiddenError = require('../errors/ForbiddenError');

class ProductRepository{
  async getProducts(userBody){
    if(userBody._doc.role === 'admin') {
      return await dbHelper.aggregate(Product,
        [
          {
            $group: {
              _id: '$xSize',
              count: {$sum: 1},
            },
          },
          {
            $lookup: {
              from: 'products',
              localField: '_id',
              foreignField: '_id',
              as: 'data',
            },
          },
        ],
        element => {
          let includedItem = _.get(element, ['data'])[0];
          includedItem = _.omit(includedItem, ['__v']);
          return {..._.omit(element, ['data']), ...includedItem};
        });
    }
    else{
      throw new ForbiddenError("Недостатньо прав");
    }
  }

  createProduct(productBody, userBody){
    if(userBody._doc.role === 'admin') {
      return co.call(this, function* () {
        let product = new Product(productBody);
        yield product.save();
        return product;
      });
    }
    else{
      throw new ForbiddenError("Недостатньо прав");
    }
  }

  async getListProducts(){
    return co.call(this, function* () {
      return yield Product.find();
    });
  }
}

module.exports = ProductRepository;

