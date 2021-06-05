import React, { useContext } from 'react';
import TopicItem from '../TopicItem/TopicItem';
import TopicContext from '../../services/topicContext';
import './TopicList.css';

function TopicList() {
  const { topics } = useContext(TopicContext);

  return (
    <div className="topic-list">
      {topics.map(topic => (<TopicItem key={topic.id} topic={topic} />))}
    </div>
  );
}

export default TopicList;