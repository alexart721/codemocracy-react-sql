require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// const router = require('./router');
const { PORT, HOST } = process.env;

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//app.use(router);

app.listen(PORT, () => {
  console.log(`Listening at http://${HOST}:${PORT}`);
});