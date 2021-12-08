import React from 'react';
import ThreadIndexCurrentContainer from '../threads/thread_index_current_container';
import ThreadIndexPastContainer from '../threads/thread_index_past_container';
import SwipeIndexContainer from '../swipes/swipe_index_container';
import ExchangeIndexContainer from '../swipes/swipe_index_past_container';

class UserShow extends React.Component {

  componentDidMount() {
    console.log(this.props.match.params.userId);
    this.props.requestUser(this.props.match.params.userId)
  }

  render() {
    
    if (!this.props.user) 
      return 'loading user'
    return (
      <div>
        <div>
        </div>
        <ThreadIndexCurrentContainer user={this.props.user}/>
        {/* <SwipeIndexContainer user={this.props.user}/> */}
        {/* <ExchangeIndexContainer user={this.props.user}/> */}
      </div>
    )
  }
}

export default UserShow;