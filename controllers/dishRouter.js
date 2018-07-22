'use strict';

var utils = require('../utils/writer.js');
var Dishes = require('../service/dishesService');

module.exports.addDishes = function addDishes (req, res, next) {
  var body = req.swagger.params['body'].value;
  Dishes.addDishes(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteDishes = function deleteDishes (req, res, next) {
  Dishes.deleteDishes()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteDishesById = function deleteDishesById (req, res, next) {
  var dishes_id = req.swagger.params['dishes_id'].value;
  Dishes.deleteDishesById(dishes_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDishes = function getDishes (req, res, next) {
  Dishes.getDishes()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDishesById = function getDishesById (req, res, next) {
  var dishes_id = req.swagger.params['dishes_id'].value;
  Dishes.getDishesById(dishes_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateDishesById = function updateDishesById (req, res, next) {
  var dishes_id = req.swagger.params['dishes_id'].value;
  var body = req.swagger.params['body'].value;
  Dishes.updateDishesById(dishes_id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
