import React from 'react';

const ThreadIndexItem = ({thread}) => (
  <div>
    <h3>{thread.sellpost}</h3>
    <p>{thread.content}</p>
    <p>{thread.timeCreated}</p>
  </div>
)

export default ThreadIndexItem;