import React from 'react';
import ThreadIndexCurrentContainer from '../threads/thread_index_current_container';
import ThreadIndexPastContainer from '../threads/thread_index_past_container';
import SwipeIndexCurrentContainer from '../swipes/swipe_index_current_container';
import SwipeIndexPastContainer from '../swipes/swipe_index_past_container';

class UserShow extends React.Component {

  componentDidMount() {
    this.props.requestUser(this.props.match.params.userId)
  }

  render() {
    console.log(this.props.user)
    if (!this.props.user) 
      return 'loading user'
    return (
      <div>
        <div>
        </div>
        <ThreadIndexCurrentContainer user={this.props.user}/>

        {/* <SwipeIndexCurrentContainer user={user}/>
        <SwipeIndexPastContainer user={user}/> */}
        {/* SwipeSaleIndexContainer */}
      </div>
    )
  }
}

export default UserShow;