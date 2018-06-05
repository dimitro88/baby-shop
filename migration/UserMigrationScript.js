const mongose = require('mongoose');
const _ = require('lodash');

const config = require('../config/config.json');
const User = require('../models/UserModel');

mongose.Promise = global.Promise;
mongose.connect(config.database, {
  useMongoClient: true
})
  .catch ((err) => {
    console.log(err);
    process.exit(1);
  });

const mockData = [
  {
    login: "admin@admin.com",
    password: "admin",
    fullName: "huy",
    role: "admin"
  },
  {
    login: "user@user.com",
    password: "user",
    fullName: "user",
    role: "user"
  }
];

const data = _.map(mockData, item => new User(item).save());

Promise.all(data).then(() => {
  console.log('all done , press ctrl + c')
});





