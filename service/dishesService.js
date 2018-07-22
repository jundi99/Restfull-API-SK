'use strict';

var dishesCollection = require('./connectedMongoose.js').dishesCollection;
var doCollection = require('./doCollection.js');

exports.addDishes = function(body) {
  return doCollection.addNew(dishesCollection, body);
}

exports.deleteDishes = function() {
  return doCollection.deleteData(dishesCollection);
}

exports.deleteDishesById = function(dishes_id) {
  return doCollection.deleteDataById(dishesCollection, dishes_id);
}

exports.getDishes = function() {
  return doCollection.getData(dishesCollection);
}

exports.getDishesById = function(dishes_id) {
  return doCollection.getDataById(dishesCollection, dishes_id);
}

exports.updateDishesById = function(dishes_id,body) {
  return doCollection.updateDataById(dishesCollection, dishes_id, body );
}