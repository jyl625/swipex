import React from "react";
// import { Link } from "react-router-dom"; 

const SwipeIndexItem = ({swipe}) => (
  <div className="swipe-index-item">
    <h2>{swipe.askPrice}-{swipe.expiration}-{swipe.mealType}</h2>
    {/* <div Link to={`swipe/${swipe.id}`}> */}
      <img src="" alt="" />
      {/* swipe(cafeteria) imageUrl */}
      {/* descriptions */}
      {/* location */}
    {/* </div> */}
  </div>
)

export default SwipeIndexItem;