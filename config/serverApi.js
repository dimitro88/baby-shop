const _ = require('lodash');
const api = _.merge(
  require('./swagger/user.json'),
  require('./swagger/base.json'),
  require('./swagger/order.json'),
  require('./swagger/product.json'),
  require('./swagger/category.json'),
);

module.exports = api;
