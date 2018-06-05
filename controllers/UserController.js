const UserRepository = require('./../repository/UserRepository');
const userRepository = new UserRepository();
const dbHelper = require('./../helpers/dbHelper');

module.exports = {
  /**
   * Реєструє нового користувача
   * @param {Object} req запит
   * @param {Object} res відповідь
   * @param {Object} next наступний
   */
  registerUser(req, res, next){
    dbHelper.handleOk(res,
      userRepository.registerUser({
        login: req.body.login,
        password: req.body.password,
        fullName: req.body.fullName,
        role: req.body.role,
    }));
  },

  /**
   * Авторизує користувача
   * @param {Object} req запит
   * @param {Object} res відповідь
   * @param {Object} next наступний
   */
  loginUser(req, res, next){
    dbHelper.handleOk(res,
      userRepository.loginUser(
        req.body.login,
        req.body.password,
      ));
  },

  updateBasket(req, res, next){
    dbHelper.handleOk(res,
      userRepository.updateBasket(req.user , req.body));
  }

};