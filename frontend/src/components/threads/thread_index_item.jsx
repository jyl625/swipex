import React from 'react';
import { Link } from 'react-router-dom';


const ThreadIndexItem = ({thread, threadType, currentUser}) => {

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

  const otherUser = (thread.buyer.username === currentUser.username) ? thread.seller : thread.buyer



  let seller;
  let buy;
  if (threadType === 'Current') {
    seller = (<p>Thread with <span className="usershow-otheruser-name">{otherUser.username}</span></p>)
    buy = (<p>Last offer from {thread.seller.username}</p>)
  }
  else {
    seller = (<p>Previous thread with <span className="usershow-otheruser-name">{otherUser.username}</span></p>)
    buy = (<p>Sold to {thread.seller.username}</p>)
  }
  return (
    <Link to={`/threads/${thread._id}`}>
      <div className="messages">
        {seller}
        {/* <ul>Comments: 
          {thread.comments.map(comment => (
            <li key={comment._id}>
              {comment._id}
            </li>
          ))}
          </ul> */}
        {/* {buy} */}
        {/* <p>SellPost: {thread.sellpost}</p> */}
        <p className="last-message-on">Last message on {parseTimeStringShort(thread.updatedAt)}</p>
      </div>
    </Link>
    )
  }

export default ThreadIndexItem;