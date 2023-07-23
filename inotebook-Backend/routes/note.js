const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');

// ROUTE - 1: Get All the Note using: GET "/api/note/fetchallnote". No Login Required.

router.get('/fetchallnote', fetchuser, async (req, res) => {
	try {
		const note = await Note.find({ user: req.user.id });
		res.json(note);
	} catch (error) {
		//catching the error.
		console.log(error.message);
		res.status(500).send('Some Error occured.');
	}
});

module.exports = router;

// ROUTE - 2: Add a new Note using: POST "/api/note/addnote". No Login Required.

router.post('/addnote', fetchuser, [body('title', 'Enter a valid title.').isLength({ min: 3 }), body('description', 'Description must be at least 5 characters.').isLength({ min: 5 })], async (req, res) => {
	try {
		const { title, description, tag } = req.body;

		//If there are any errors, return Bad request and the errors.
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const note = new Note({
			title,
			description,
			tag,
			user: req.user.id,
		});
		const saveNote = await note.save();
		res.json(note);
	} catch (error) {
		//catching the error.
		console.log(error.message);
		res.status(500).send('Some Error occured.');
	}
});

// ROUTE - 3: Update an existing Note using: POST "/api/note/updatenote". No Login Required.

router.put('/updatenote/:id', fetchuser, async (req, res) => {
	const { title, description, tag } = req.body;

	//Create a newNote object
	const newNote = {};

	if (title) newNote.title = title;

	if (description) newNote.description = description;

	if (tag) newNote.tag = tag;

	//Find the note to be updated and update it
	let note = await Note.findById(req.params.id);
	if (!note) return res.status(404).send('Not Found');

	if (note.user.toString() !== req.user.id) return res.status(401).send('Not Allowed');

	note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });

	res.json({ note });
});

module.exports = router;
