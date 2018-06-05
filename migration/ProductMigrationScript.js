const mongose = require('mongoose');
const _ = require('lodash');

const config = require('../config/config.json');
const Product = require('../models/ProductModel');

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
    price: "",
    xSize: "",
    obhvatTalii : "",
    length : "",
    photo : "",
    categoryId : "",
  },
  {
    name : "",
    price: "",
    xSize: "",
    obhvatTalii : "",
    length : "",
    photo : "",
    categoryId : "",
  },
  {
    name : "",
    price: "",
    xSize: "",
    obhvatTalii : "",
    length : "",
    photo : "",
    categoryId : "",
  },
  {
    name : "",
    price: "",
    xSize: "",
    obhvatTalii : "",
    length : "",
    photo : "",
    categoryId : "",
  },
  {
    name : "",
    price: "",
    xSize: "",
    obhvatTalii : "",
    length : "",
    photo : "",
    categoryId : "",
  },
  {
    name : "",
    price: "",
    xSize: "",
    obhvatTalii : "",
    length : "",
    photo : "",
    categoryId : "",
  },
  {
    name : "",
    price: "",
    xSize: "",
    obhvatTalii : "",
    length : "",
    photo : "",
    categoryId : "",
  },
  {
    name : "",
    price: "",
    xSize: "",
    obhvatTalii : "",
    length : "",
    photo : "",
    categoryId : "",
  },
  {
    name : "",
    price: "",
    xSize: "",
    obhvatTalii : "",
    length : "",
    photo : "",
    categoryId : "",
  }
];

const data = _.map(mockData, item => new Product(item).save());

Promise.all(data).then(() => {
  console.log('all done , press ctrl + c')
});





