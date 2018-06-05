const mongose = require('mongoose');
const _ = require('lodash');

const config = require('../config/config.json');
const Category = require('../models/CategoryModel');

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
    name : "",
    photo : "",
    sexType : "",
  },
  {
    name : "",
    photo : "",
    sexType : "",
  },
  {
    name : "",
    photo : "",
    sexType : "",
  },
  {
    name : "",
    photo : "",
    sexType : "",
  },
  {
    name : "",
    photo : "",
    sexType : "",
  },
  {
    name : "",
    photo : "",
    sexType : "",
  },
  {
    name : "",
    photo : "",
    sexType : "",
  },
  {
    name : "",
    photo : "",
    sexType : "",
  }
];

const data = _.map(mockData, item => new Category(item).save());

Promise.all(data).then(() => {
  console.log('all done , press ctrl + c')
});





