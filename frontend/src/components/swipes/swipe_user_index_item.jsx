import React from 'react';

const SwipeUserIndexItem = ({swipe}) => (
  <div className="messages">
    <li key={swipe.sellPost}>
      <p>Seller: {swipe.seller}</p>
      <p>MealType: {swipe.mealType}</p>
      <p>AskPrice: {swipe.askPrice}</p>
      <p>Expired at: {swipe.expiration}</p>
    </li>
  </div>
)

export default SwipeUserIndexItem;

      