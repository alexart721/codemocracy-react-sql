import './App.css';
import React, { useEffect, useState } from 'react';
import { getTopics, postTopic, updateTopic, deleteTopic } from './services/apiService';
import TopicContext from './services/topicContext';
import TopicList from './components/TopicList/TopicList';
import TopicSubmit from './components/TopicSubmit/TopicSubmit';

function App() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(topicList => {
      topicList.sort((a, b) => b.score - a.score);
      setTopics(topicList);
    });
  }, []);

  const createTopic = title => {
    postTopic(title).then(topic => {
      setTopics(oldTopics => [...oldTopics, topic]);
    });
  }

  const voteTopic = (id, direction) => {
    updateTopic(id, direction).then(updatedTopic => {
      //updatedTopic is an array
      const newTopics = topics
        .map(topic => {
          return (topic.id === id ? updatedTopic[0] : topic)
        })
        .sort((a, b) => b.score - a.score);
      setTopics(newTopics);
    });
  }

  const removeTopic = id => {
    deleteTopic(id).then(res => {
      if (res?.ok) setTopics(oldTopics => oldTopics.filter(topic => topic.id !== id));
    });
  }

  return (
    <TopicContext.Provider value={{topics, createTopic, voteTopic, removeTopic}}>
      <div className="App">
        <TopicSubmit />
        <TopicList />
      </div>
    </TopicContext.Provider>
  );
}

export default App;