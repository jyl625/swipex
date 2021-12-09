import React from 'react';

const ThreadIndexItem = ({thread}) => {
  console.log(thread)
  return (
  <div className="thread-index-item">
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
    <p>Time sent: {thread.timeUpdated}</p>
  </div>)
}

export default ThreadIndexItem;