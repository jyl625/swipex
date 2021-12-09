import React from "react";
import { Link } from "react-router-dom"; 

const SwipeIndexItem = ({swipe}) => {
  const parseTimeString = () => {
    const dateObj = new Date(swipe.meetingTime)
    return dateObj.toLocaleString("en-US", { 
      timeZone: "America/Los_Angeles", 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1)
  }

  return (
    <Link to={`/swipe/${swipe._id}`}>
      <div className="swipe-index-item">
        <div className="top-detail-container">
          <h1>$ {Number(swipe.askPrice).toFixed(2)}</h1>
          <h2>{capitalize(swipe.mealType)}</h2>
          <h2>Meet @ {parseTimeString(swipe.meetingTime)}</h2>
        </div>
        <h3>Post expires: {swipe.expiration}</h3>
        <img src="" alt="" />
        {/* swipe(cafeteria) imageUrl */}
        {/* descriptions */}
        {/* location */}
        {/* </div> */}
      </div>
    </Link>
  )
}

export default SwipeIndexItem;