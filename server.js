const express = require('express');
const bodyParser = require('body-parser');
require('./config/database');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
   .use(bodyParser.json());

app.use('/api', require('./routes/event'));

const port = parseInt(process.env.PORT, 10) || 8000;

app.listen(port, () => {
  console.log(`App is running at: localhost:${port}`);
});
