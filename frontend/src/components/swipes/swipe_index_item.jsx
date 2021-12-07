import React from "react";
import { Link } from "react-router-dom"; 

const SwipeIndexItem = ({swipe}) => (
  <div Link to={`swipe/${swipe.id}`}>
    <img src="" alt="" />
    {/* swipe imageUrl */}
    {/* descriptions */}
    {/* location */}
  </div>
)

export default SwipeIndexItem;