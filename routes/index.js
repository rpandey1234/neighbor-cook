var db = require('../models');
var _ = require('lodash');

/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index');
};

exports.splash = function(req, res) {
  res.render('splash');
};

// AJAX call to this endpoint
exports.search = function(req, res) {
	var query = req.query.query;
	db.Item
  .find({ where: { name: query }})
  .success(function(item) {
  	if (!item) {
  		res.json({
	      'query': query,
				'results': []
	    });
  	} else {
      db.InventoryItem
		    .findAll({ where: { ItemId: item.id } }) 
		    // pre-fetching Users with include does not work here
		    .success(function(inventoryItems) {
		    	var userIds = _.pluck(inventoryItems, 'UserId');
		    	db.User
		    		.findAll({ where: { id: userIds } })
		    		.success(function(users) {
					    res.json({
					      'query': query,
								'results': users
					    });
		    		});
		    });
    }
  });		
};

exports.searchTypeahead = function(req, res) {
  db.Item
  .findAll({ 
    where: ["LOWER(name) LIKE '%" + req.query.query.toLowerCase() + "%'"],
    attributes: ['name']
  })
  .success(function(items) {
    res.json(items);
  });
};




