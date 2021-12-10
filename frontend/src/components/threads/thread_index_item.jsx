import React from 'react';
import { Link } from 'react-router-dom';
const ThreadIndexItem = ({thread}) => (
  <Link to={`/threads/${thread.id}`}>
    <div className="messages">
      <p>Sold to: {thread.buyer.username}</p>
      <ul>Comments: 
        {thread.comments.map(comment => (
          <li key={comment._id}>
            {comment._id}
          </li>
        ))}
        </ul>
      <p>Buy from: {thread.seller.username}</p>
      <p>SellPost: {thread.sellpost}</p>
      <p>Sent: {thread.updatedAt}</p>
    </div>
  </Link>
)

export default ThreadIndexItem;