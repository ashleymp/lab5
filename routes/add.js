var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	res.render('add');
	var newFriend = {
		"name": req.query.name, 
		"description": req.query.description,
		"imageURL":"http://fc01.deviantart.net/fs71/i/2013/227/0/6/puppycat_amigurumi_plush___wide_angle_by_kaelby-d6i8ugn.jpg"
	};

	data["friends"].push(newFriend);
	console.log(newFriend);
 }