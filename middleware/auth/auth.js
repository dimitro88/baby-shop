const passport = require('passport');
const UnauthorizedError = require('../../errors/UnauthorizedError');
const ForbiddenError = require('../../errors/ForbiddenError');

const swaggerAuth = {
  token: function (req, authOrSecDef, scopesOrApiKey, callback) {
    passport.authenticate('jwt', {session: false}, (err, user, info) => {
      if(err||!user) {
        return callback(new UnauthorizedError());
      }
      req.user = user;
      return callback();
    })(req, null, callback)
  }
};

module.exports = {
  swaggerAuth
};