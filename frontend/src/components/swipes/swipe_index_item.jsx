import React from "react";
// import { Link } from "react-router-dom"; 

const SwipeIndexItem = ({swipe}) => (
  <div className="swipe-index-item">
    <div>{swipe.askPrice}-{swipe.expiration}</div>
    {/* <div Link to={`swipe/${swipe.id}`}> */}
      <img src="" alt="" />
      {/* swipe(cafeteria) imageUrl */}
      {/* descriptions */}
      {/* location */}
    {/* </div> */}
  </div>
)

export default SwipeIndexItem;