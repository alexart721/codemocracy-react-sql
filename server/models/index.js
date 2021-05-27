const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '/.env') });
const { DB_USER, DB_PASSWORD, DB_PORT, DB, HOST } = process.env;
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${HOST}:${DB_PORT}/${DB}`);

sequelize.authenticate().then(res => {
  console.log(`Connection established to ${DB}!`);
}).catch(err => {
  console.error(`Unable to connect to ${DB}, error: `, err);
});

module.exports = sequelize;