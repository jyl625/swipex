import React from 'react';
import ThreadIndexCurrentContainer from '../threads/thread_index_current_container';
import ThreadIndexPastContainer from '../threads/thread_index_past_container';
import SwipeIndexCurrentContainer from '../swipes/swipe_index_current_container';
import SwipeIndexPastContainer from '../swipes/swipe_index_past_container';

const UserShow = ({user}) => (
  <div>
    <div>
    </div>
    <ThreadIndexCurrentContainer user={user}/>
    <ThreadIndexPastContainer user={user}/>
    <SwipeIndexCurrentContainer user={user}/>
    <SwipeIndexPastContainer user={user}/>
    {/* SwipeSaleIndexContainer */}
  </div>
)

export default UserShow;