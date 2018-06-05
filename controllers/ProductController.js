const ProductRepository = require('./../repository/ProductRepository');
const productRepository = new ProductRepository();
const dbHelper = require('./../helpers/dbHelper');

module.exports = {
  /**
   * Вертає список товарів на складі
   * @param {Object} req запит
   * @param {Object} res відповідь
   * @param {Object} next наступний
   */
  getProducts(req,res,next){
    dbHelper.handleOk(res,
      productRepository.getProducts(req.user));
  },

  createProduct(req, res, next){
    dbHelper.handleOk(res,
      productRepository.createProduct(req.body,req.user));
  },

  getListProducts(req, res, next){
    dbHelper.handleOk(res,
      productRepository.getListProducts())
  },
};