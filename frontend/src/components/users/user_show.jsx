import React from 'react';
import ThreadIndexCurrentContainer from '../threads/thread_index_current_container';
import ThreadIndexPastContainer from '../threads/thread_index_past_container';
import SwipeIndexCurrentContainer from '../swipes/swipe_index_current_container';
import SwipeIndexPastContainer from '../swipes/swipe_index_past_container';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestUser(this.props.match.params.userId)
  }

  render() {
    if (this.props.user) {
      console.log(this.props);
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
    else {
      console.log(this.props)
      return (
      <div>Loading User</div>
      )
    }
  }
}

export default UserShow;