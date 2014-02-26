var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
  	res.render('index', projects);
};

// exports.view = function(req, res){
//   var data = {'showAlternate' : false};
//   res.render('index', data);
// };

exports.viewAlternate = function(req, res){
  var data = {'showAlternate' : true};
  res.render('index', data);
};