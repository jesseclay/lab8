var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
  var data = {'projects': projects['projects'], 'grid' : false};
  res.render('index', data);
};

exports.viewGrid = function(req, res){
  var data = {'projects': projects['projects'], 'grid' : true};
  res.render('index', data);
};