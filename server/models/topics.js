const sequelize = require('./index');
const { DataTypes } = require('sequelize');


const Topic = sequelize.define('Topic', {
  title: DataTypes.TEXT,
  published_at: {
    type: DataTypes.DATE,
    defaultValue: Date.now()
  },
  score: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

module.exports = Topic;