const express = require('express');
const router = express.Router();
const { getTopics, postTopic, voteTopic, deleteTopic } = require('./controllers/topics');

router.get('/topics', getTopics);
router.post('/topics', postTopic);
router.patch('/topics/:id/:direction', voteTopic);
router.delete('/topics/:id', deleteTopic);

module.exports = router;