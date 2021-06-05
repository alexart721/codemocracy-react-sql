const baseUrl = 'http://localhost:3005';

const getTopics = () => {
  return customFetch('/topics');
}

const postTopic = title => {
  return customFetch('/topics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title })
  });
}

const updateTopic = (id, direction) => {
  return customFetch(`/topics/${id}/${direction}`, { method: 'PATCH' });
}

const deleteTopic = id => {
  return customFetch(`/topics/${id}`, { method: 'DELETE' });
}

const customFetch = (path, options) => {
  return fetch(baseUrl + path, options)
    .then(res => res.status >= 400 ? Promise.reject(res) : res)
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => {
      console.log(`Fetch error on ${path}: `, err);
    });
}

module.exports = {
  getTopics,
  postTopic,
  updateTopic,
  deleteTopic
}