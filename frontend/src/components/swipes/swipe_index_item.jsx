import React from "react";
import { Link } from "react-router-dom"; 


const SwipeIndexItem = ({ swipe, swipeShow, requestSwipe }) => {
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

  const parseTimeStringShort = (timeStr) => {
    const dateObj = new Date(timeStr)
    const dateString = dateObj.toLocaleString("en-US", { 
      timeZone: "America/Los_Angeles", 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
    const timeString = dateObj.toLocaleTimeString("en-US", {
      timeZone: "America/Los_Angeles",
      hour: '2-digit',
      minute: '2-digit'
    })
    return `${dateString} at ${timeString}`
  }

  const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1)
  }

  let handleClick = () => {
    return () => {
      console.log(swipe)
      console.log("hello")
      requestSwipe(swipe._id).then(() => {swipeShow()})
    }
  }

  return (
    <div onClick={handleClick()}>
      <div className="swipe-index-item">
        <div className="top-detail-container">
          <h1>$ {Number(swipe.askPrice).toFixed(2)}</h1>
          <h2>{capitalize(swipe.mealType)}</h2>
          <h2>Meet @ {parseTimeString(swipe.meetingTime)}</h2>
        </div>
        <h3>Post expires: {swipe.expiration}</h3>
        <h3>Post created: {parseTimeStringShort(swipe.timeCreated)}</h3>

        <img src="" alt="" />
        {/* swipe(cafeteria) imageUrl */}
        {/* descriptions */}
        {/* location */}
        {/* </div> */}
      </div>
    </div>
  )
}

export default SwipeIndexItem;