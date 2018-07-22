'use strict';

var utils = require('../utils/writer.js');
var Promotions = require('../service/promotionsService');

module.exports.addPromotions = function addPromotions (req, res, next) {
  var body = req.swagger.params['body'].value;
  Promotions.addPromotions(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePromotions = function deletePromotions (req, res, next) {
  Promotions.deletePromotions()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePromotionsById = function deletePromotionsById (req, res, next) {
  var promotions_id = req.swagger.params['promotions_id'].value;
  Promotions.deletePromotionsById(promotions_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPromotions = function getPromotions (req, res, next) {
  Promotions.getPromotions()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPromotionsById = function getPromotionsById (req, res, next) {
  var promotions_id = req.swagger.params['promotions_id'].value;
  Promotions.getPromotionsById(promotions_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePromotionsById = function updatePromotionsById (req, res, next) {
  var promotions_id = req.swagger.params['promotions_id'].value;
  var body = req.swagger.params['body'].value;
  Promotions.updatePromotionsById(promotions_id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
