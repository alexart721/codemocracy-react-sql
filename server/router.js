const express = require('express');
const router = express.Router();

// Get
router.get('/topics', (req, res) => {
  res.status(200);
  res.send('Get works!');
});

// Post
router.post('/topics', (req, res) => {
  res.status(201);
  res.send('Post works!');
});

// Patch
router.patch('/topics/:id/:direction', (req, res) => {
  res.status(200);
  res.send('Patch works!');
});

// Delete
router.delete('/topics/:id', (req, res) => {
  res.send('Delete works!');
  res.statusCode = 204;
});

module.exports = router;