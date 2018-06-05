const co = require('co');
const _ = require('lodash');

const Category = require('../models/CategoryModel');
const ForbiddenError = require('../errors/ForbiddenError');
const Product = require('../models/ProductModel');

class CategoryRepository {

  createCategory(categoryBody,userBody) {
    if(userBody._doc.role === 'admin'){
      return co.call(this, function* () {
        let category = new Category(categoryBody);
        yield category.save();
        return category;
      });
    }
    else{
      throw new ForbiddenError("Недостатньо прав");
    }
  }

  getCategoryById(category_id) {
    return co.call(this, function* () {
      return yield Product.find({categoryId : category_id});
    });
  }

  getListCategories(sexType){
    return co.call(this, function* () {
      return yield Category.find({sexType});
    });
  }

}

module.exports = CategoryRepository;

