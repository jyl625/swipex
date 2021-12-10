import React from 'react';

const ThreadIndexItem = ({thread}) => {
  return (
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
  </div>)
}

export default ThreadIndexItem;