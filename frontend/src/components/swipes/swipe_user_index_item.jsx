import React from 'react';
import { Link } from 'react-router-dom';

const SwipeUserIndexItem = ({swipe}) => (
  <Link to={`/swipe/${swipe._id}`}>
    <div className="messages" >
      <div>MealType: {swipe.mealType}</div>
      <div>AskPrice: {swipe.askPrice}</div>
      <div>Expired at: {swipe.expiration}</div>
    </div>
  </Link>
)

export default SwipeUserIndexItem;

      