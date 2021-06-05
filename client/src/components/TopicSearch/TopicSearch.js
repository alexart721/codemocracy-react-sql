import './TopicSearch.css';
import React, { useContext, useState } from 'react';
import TopicContext from '../../services/topicContext';

function TopicSearch() {
  const { createTopic } = useContext(TopicContext);
  const [title, setTitle] = useState('');

  const submitHandler = event => {
    event.preventDefault();
    createTopic(title);
    setTitle('');
  };

  const changeHandler = ({ target }) => {
    setTitle(target.value);
  }

  return(
    <div>
      <form action="submit" onSubmit={submitHandler}>
        <input type="text" name="title" value={title} onChange={changeHandler} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TopicSearch;