const OrderRepository = require('./../repository/OrderRepository');
const orderRepository = new OrderRepository();
const dbHelper = require('./../helpers/dbHelper');

module.exports = {
  /**
   * Створює нове замовлення
   * @param {Object} req запит
   * @param {Object} res відповідь
   * @param {Object} next наступний
   */
  addOrder(req, res, next){
    dbHelper.handleOk(res,
     orderRepository.addOrder(req.body,req.user));
  }
};