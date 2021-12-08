import React from 'react';

const ThreadIndexItem = ({thread}) => {
  console.log(thread)
  return (
  <div>
    <p>Sold to: {thread.buyer.username}</p>
    <p>Comment: {thread.comments[0]._id}</p>
    <p>Buy from: {thread.seller.username}</p>
    <p>SellPost: {thread.sellpost}</p>
    <p>Time sent: {thread.timeUpdated}</p>
  </div>)
}

export default ThreadIndexItem;