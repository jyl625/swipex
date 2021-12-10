import React from 'react';
import { Link } from 'react-router-dom';
const ThreadIndexItem = ({thread, threadType}) => {
  let seller;
  let buy;
  if (threadType === 'Current') {
    seller = (<p>Start Conversation with {thread.seller.username}</p>)
    buy = (<p>Offer from {thread.seller.username}</p>)
  }
  else {
    seller = (<p>View Historical Conversaion with {thread.seller.username}</p>)
    buy = (<p>Sold to {thread.seller.username}</p>)
  }
  return (
    <Link to={`/threads/${thread._id}`}>
      <div className="messages">
        {seller}
        <ul>Comments: 
          {thread.comments.map(comment => (
            <li key={comment._id}>
              {comment._id}
            </li>
          ))}
          </ul>
        {buy}
        <p>SellPost: {thread.sellpost}</p>
        <p>Sent: {thread.updatedAt}</p>
      </div>
    </Link>
    )
  }

export default ThreadIndexItem;