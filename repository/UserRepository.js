const jwt = require('jsonwebtoken');
const co = require('co');
const User = require('./../models/UserModel');
const UnauthorizedError = require('./../errors/ForbiddenError');
const cryptoHelper = require('./../helpers/cryptoHelpers');
const config = require('./../config/config.json');
const CustomError = require('../errors/CustomError');

class UserRepository {
  registerUser(userBody) {
    return co.call(this, function* () {
      if(userBody.role === 'admin') {
        throw new UnauthorizedError();
      }
      let user  = new User(userBody);
      yield user.save();
      return user;
    })
  }

  loginUser(login, password) {
    return co.call(this, function* () {
      let user = yield User.findOne({login}).exec();
      if (!user) {
        throw new UnauthorizedError();
      }
      let isMatch = yield cryptoHelper.copmare(password, user.password);
      if(!isMatch) throw new UnauthorizedError();
      const token = jwt.sign({_id: user._id}, config.secret);
      return{
        user : user.toJSON(),
        token
      }
    })
  }

  updateBasket(userBody , basketBody){
    return co.call(this, function* () {
      return yield User.findByIdAndUpdate(userBody._id,basketBody);
    })
  }
}
module.exports = UserRepository;
