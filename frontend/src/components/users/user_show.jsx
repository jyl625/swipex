import React from 'react';
import ThreadIndexCurrentContainer from '../threads/thread_index_current_container';
import ThreadIndexPastContainer from '../threads/thread_index_past_container';
import SwipeUserIndexContainer from '../swipes/swipe_user_index_container';
import ExchangeIndexContainer from '../exchanges/exchange_index_container';

import '../stylings/reset.css'
import '../stylings/user_show.css'

class UserShow extends React.Component {

  componentDidMount() {
    this.props.requestUser(this.props.match.params.userId)
  }

  render() {

    if (!this.props.user) 
      return 'loading user'
      
    return (
      <div className="usershow-main">
        <div className="usershow-wrapper">
          <h1>{this.props.user.username}'s Profile</h1>
          <div className="usershow-column">
            <ThreadIndexCurrentContainer user={this.props.user}/>
            <ThreadIndexCurrentContainer user={this.props.user}/>
          </div>
          <div className="usershow-column">
            <SwipeUserIndexContainer user={this.props.user}/>
            <ExchangeIndexContainer user={this.props.user}/>
          </div>
        </div>
      </div>
    )
  }
}

export default UserShow;