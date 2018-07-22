'use strict';

var leadershipCollection = require('./connectedMongoose.js').leadershipCollection;
var doCollection = require('./doCollection.js');

exports.addLeadership = function(body) {
  return doCollection.addNew(leadershipCollection, body);
}

exports.deleteLeadership = function() {
  return doCollection.deleteData(leadershipCollection);
}

exports.deleteLeadershipById = function(leadership_id) {
  return doCollection.deleteDataById(leadershipCollection, leadership_id);
}

exports.getLeadership = function() {
  return doCollection.getData(leadershipCollection);
}

exports.getLeadershipById = function(leadership_id) {
  return doCollection.getDataById(leadershipCollection, leadership_id);
}

exports.updateLeadershipById = function(leadership_id,body) {
  return doCollection.updateDataById(leadershipCollection, leadership_id, body );
}