const Topic = require('../models/topics');

const getTopics = async (req, res) => {
  try {
    const topics = await Topic.findAll();
    res.status(200);
    res.send(topics);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
}

const postTopic = async (req, res) => {
  try {
    const { title } = req.body.title;
    const topic = await Topic.create({ title });
    res.status(201);
    res.send(topic);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
}

const voteTopic = async (req, res) => {
  try {
    const { id, direction } = req.params;
    const updatedTopic;
    if (direction !== 'up' && direction !== 'down') {
      throw new Error('Wrong direction');
    }
    if (direction === 'up') {
      updatedTopic = await Topic.increment('score', { where: { id: id } });
    } else {
      updatedTopic = await Topic.decrement('score', { where: { id: id } });
    }
    res.status(200);
    res.send(updatedTopic);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
}

const deleteTopic = async (req, res) => {
  try {
    await Topic.destroy({ where: { id: req.params.id } });
    res.status(204);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
}

module.exports = {
  getTopics,
  postTopic,
  voteTopic,
  deleteTopic
}