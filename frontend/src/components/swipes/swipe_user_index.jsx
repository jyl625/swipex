import React from 'react';
import SwipeUserIndexItem from './swipe_user_index_item';

import '../stylings/reset.css'
import '../stylings/user_show.css'

class SwipeUserIndex extends React.Component {
  
  componentDidMount() {
    this.props.requestUserSwipes(this.props.user.id)
  }

  render() {

    if (Object.keys(this.props.swipes).length === 0)
      return 'loading swipes'
    return (
      <div className="usershow-item-container">
        <div className="usershow-item-title">{this.props.user.username}</div>
        <div className="usershow-item">
          { 
            this.props.swipes.map(swipe => (
              <SwipeUserIndexItem swipe={swipe}/>
            ))
          }
        </div>
      </div>
    )
  }
}

export default SwipeUserIndex;