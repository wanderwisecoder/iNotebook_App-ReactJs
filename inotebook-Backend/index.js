const connectToMongo = require('./db');

const express = require('express');

connectToMongo();
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World of Coding   !');
});

app.listen(port, () => {
	console.log(`Example app listening on port http://localhost:${port}`);
});
