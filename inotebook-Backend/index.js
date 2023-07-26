const connectToMongo = require('./db');

const express = require('express');

connectToMongo();
const app = express();
const port = 5055;

app.use(express.json());

//Available Routes

app.use('/api/auth', require('./routes/auth'));
app.use('/api/note', require('./routes/note'));

app.listen(port, () => {
	console.log(`iNotebook backend listening on port http://localhost:${port}`);
});
