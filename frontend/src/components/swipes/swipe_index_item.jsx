import React from "react";
import { Link } from "react-router-dom"; 

const SwipeIndexItem = ({swipe}) => (
  <Link to={`/swipe/${swipe._id}`}>
      <div className="swipe-index-item">
      <h1>$ {Number(swipe.askPrice).toFixed(2)}</h1>
      <h2>{swipe.mealType}</h2>
      <h3>Post expires: {swipe.expiration}</h3>
      <img src="" alt="" />
      {/* swipe(cafeteria) imageUrl */}
      {/* descriptions */}
      {/* location */}
      {/* </div> */}
    </div>
  </Link>
)

export default SwipeIndexItem;