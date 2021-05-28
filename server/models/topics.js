const sequelize = require('./index');
const { DataTypes } = require('sequelize');


const Topic = sequelize.define('Topic', {
  title: DataTypes.TEXT,
  score: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

Topic.sync();

module.exports = Topic;