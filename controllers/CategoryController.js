const CategoryRepository = require('./../repository/CategoryRepository');
const categoryRepository = new CategoryRepository();
const dbHelper = require('./../helpers/dbHelper');

module.exports = {

  createCategory(req, res, next){
    dbHelper.handleOk(res,
      categoryRepository.createCategory(req.body,req.user));
  },

  getCategoryById(req,res,next){
    dbHelper.handleOk(res,
      categoryRepository.getCategoryById(req.swagger.params.category_id.value));
  },

  getListCategories(req, res, next){
    dbHelper.handleOk(res,
      categoryRepository.getListCategories(req.swagger.params.sex.value))
  },

};