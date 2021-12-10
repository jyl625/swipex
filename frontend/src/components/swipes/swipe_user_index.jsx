import React from 'react';
import SwipeUserIndexItem from './swipe_user_index_item';

import '../stylings/reset.css'
import '../stylings/user_show.css'

class SwipeUserIndex extends React.Component {
  
  componentDidMount() {
    this.props.requestUserSwipes(this.props.user.id)
  }

  listSwipes() {
    const sortedSwipes = this.props.swipes.sort(function(a, b) {
      var keyA = new Date(a.expiration), keyB = new Date (b.expiration);
      if (keyA < keyB) return 1;
      else return -1;
    });
    this.props.updateCount('CS', sortedSwipes.length)
      return sortedSwipes.map(swipe => 
      <SwipeUserIndexItem swipe={swipe}/>
    )
  }

  render() {

    if (Object.keys(this.props.swipes).length === 0)
      return 'loading swipes'
    
    return (
      <div className="usershow-item-container">
        <div className="usershow-item-title">Ongoing Sales Posts from {this.props.user.username}</div>
        <div className="usershow-item">
          { 
           this.listSwipes()
          }
        </div>
      </div>
    )
  }
}

export default SwipeUserIndex;