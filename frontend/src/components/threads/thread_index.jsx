import React from 'react';
import ThreadIndexItem from './thread_index_item';

import '../stylings/reset.css'
import '../stylings/user_show.css'

class ThreadIndex extends React.Component {
 
  componentDidMount() {
    this.props.requestUserThreads(this.props.user.id);
  }

  render() {
    if (Object.keys(this.props.threads).length === 0)
      return 'loading threads';
    return (
      <div className="usershow-item-container">
        <div className="usershow-item-title" >Past Conversation of {this.props.user.username}</div>
        <div className="usershow-item">
        {
          this.props.threads.map(thread => (
            <ThreadIndexItem key={thread.id} thread={thread}/>
          ))
        }
        </div>
      </div>
    )
  }
}

export default ThreadIndex;