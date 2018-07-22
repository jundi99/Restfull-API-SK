'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://assessment18:assessment2018@ds145871.mlab.com:45871/sk', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('Conntected To Mongo Database');
});

var dishesSchema = mongoose.Schema({
  _dishes_id: String,
  dishes_name: String,
  created_date: Date,
  is_active: Boolean
});

var promotionsSchema = mongoose.Schema({
  _promotions_id: String,
  promotions_name: String,
  created_date: Date,
  is_active: Boolean
});

var leadershipSchema = mongoose.Schema({
  _leadership_id: String,
  leadership_name: String,
  created_date: Date,
  is_active: Boolean
});

exports.dishesCollection = mongoose.model('dishesCollection', dishesSchema);
exports.promotionsCollection = mongoose.model('promotionsCollection', promotionsSchema);
exports.leadershipCollection = mongoose.model('leadershipCollection', leadershipSchema);