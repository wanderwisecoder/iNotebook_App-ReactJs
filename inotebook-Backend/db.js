const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/';
// const connectToMongo = () => {
// 	mongoose.connect(mongoURI, () => {
// 		console.log('Connected to Mongo Sucessfully');
// 	});
// };

const connectToMongo = () => {
	mongoose.connect(mongoURI);
	console.log('connected to Mongo Sucessfully');
};

// const connectToMongo = async () => {
// 	try {
// 		mongoose.set('strictQuery', false);
// 		mongoose.connect(mongoURI);
// 		console.log('Mongo connected');
// 	} catch (error) {
// 		console.log(error);
// 		process.exit();
// 	}
// };

module.exports = connectToMongo;
