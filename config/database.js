const mongoose = require('mongoose');

const dbName = 'event-api';

mongoose.connect(`mongodb://localhost/${dbName}`);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`Connected to the ${dbName} database`));
