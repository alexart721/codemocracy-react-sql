import React, { useContext } from 'react';
import TopicContext from '../../services/topicContext';
import moment from 'moment';
import './TopicItem.css';

function TopicItem({ topic }){
  const { voteTopic, removeTopic } = useContext(TopicContext);

  return (
    <div className="topic">
      <div className="vote">
        <button className='up-vote' onClick={() => voteTopic(topic.id, 'up')}>
          ^
        </button>
        {topic.score}
        <button className='down-vote' onClick={() => voteTopic(topic.id, 'down')}>
          v
        </button>
      </div>
      <div className="topic-title">
        <h2>{topic.title}</h2>
        <p>Created on {moment(topic.createdAt).format('Do MMM YYYY')}</p>
      </div>
      <div className="delete">
        <button className="delete-btn" onClick={() => removeTopic(topic.id)}>x</button>
      </div>
    </div>
  )
}

export default TopicItem;