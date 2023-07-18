const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

//Create a User using: POST "/api/auth/createUser". No Login Required.

router.post('/createuser', [body('name', 'Enter a valid name.').isLength({ min: 3 }), body('email', 'Enter a valid email.').isEmail(), body('password', 'Password must be at least 5 characters.').isLength({ min: 5 })], async (req, res) => {
	// console.log(req.body);
	// const user = User(req.body);
	// user.save();

	//If their are errors, return Bad request and the errors.
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	//Check weather the user with same email exists already
	try {
		let user = await User.findOne({ email: req.body.email });
		if (user) {
			return res.status(400).json({ error: 'Sorry a user with this email already exists.' });
		}
		//creating a new user
		user = await User.create({
			name: req.body.name,
			password: req.body.password,
			email: req.body.email,
		});
		res.json({ user });
	} catch (error) {
		//catching the error.
		console.log(error.message);
		res.status(500).send('Some Error occured.');
	}
});

module.exports = router;
