const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./config/database');

const app = express();

app.use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json());

app.use('/api', require('./routes/event'));

const port = parseInt(process.env.PORT, 10) || 8000;

app.listen(port, () => {
  console.log(`App is running at: localhost:${port}`);
});
