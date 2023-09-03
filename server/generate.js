//Documentation: https://www.npmjs.com/package/faker
// var faker = require('faker');
var products = require('./json/products');
var countries = require('./json/countries');

var database = {
  products,
  countries,
};

console.log(JSON.stringify(database));
