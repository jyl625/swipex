import React from 'react';
import { Link } from 'react-router-dom';

const SwipeUserIndexItem = ({swipe}) => (
  <Link to={`/swipe/${swipe._id}`}>
    <div className="messages" >
      <div><span className="usershow-index-item-grey">Meal Type:</span>  {swipe.mealType}</div>
      <div><span className="usershow-index-item-grey">Asking price:</span>   ${Number(swipe.askPrice).toFixed(2)}</div>
      <div><span className="usershow-index-item-grey">Expired at:</span>  {swipe.expiration}</div>
    </div>
  </Link>
)

export default SwipeUserIndexItem;

      