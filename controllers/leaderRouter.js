'use strict';

var utils = require('../utils/writer.js');
var Leadership = require('../service/leadershipService');

module.exports.addLeadership = function addLeadership (req, res, next) {
  var body = req.swagger.params['body'].value;
  Leadership.addLeadership(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteLeadership = function deleteLeadership (req, res, next) {
  Leadership.deleteLeadership()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteLeadershipById = function deleteLeadershipById (req, res, next) {
  var leadership_id = req.swagger.params['leadership_id'].value;
  Leadership.deleteLeadershipById(leadership_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLeadership = function getLeadership (req, res, next) {
  Leadership.getLeadership()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLeadershipById = function getLeadershipById (req, res, next) {
  var leadership_id = req.swagger.params['leadership_id'].value;
  Leadership.getLeadershipById(leadership_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateLeadershipById = function updateLeadershipById (req, res, next) {
  var leadership_id = req.swagger.params['leadership_id'].value;
  var body = req.swagger.params['body'].value;
  Leadership.updateLeadershipById(leadership_id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
