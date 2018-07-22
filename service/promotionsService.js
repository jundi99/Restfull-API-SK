'use strict';

var promotionsCollection = require('./connectedMongoose.js').promotionsCollection;
var doCollection = require('./doCollection.js');

exports.addPromotions = function(body) {
  return doCollection.addNew(promotionsCollection, body);
}

exports.deletePromotions = function() {
  return doCollection.deleteData(promotionsCollection);
}

exports.deletePromotionsById = function(promotions_id) {
  return doCollection.deleteDataById(promotionsCollection, promotions_id);
}

exports.getPromotions = function() {
  return doCollection.getData(promotionsCollection);
}

exports.getPromotionsById = function(promotions_id) {
  return doCollection.getDataById(promotionsCollection, promotions_id);
}

exports.updatePromotionsById = function(promotions_id,body) {
  return doCollection.updateDataById(promotionsCollection, promotions_id, body );
}