const express = require('express');
const router = express.Router();
const User = require('../models/User');

//Create a User using: POST "/api/auth/". Doesn't required Auth

router.post('/', (req, res) => {
	console.log(req.body);
	const user = User(req.body);
	user.save();
	res.send(req.body);
});

module.exports = router;
