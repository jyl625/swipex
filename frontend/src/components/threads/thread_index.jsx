import React from 'react';
import ThreadIndexItem from './thread_index_item';

import '../stylings/reset.css'
import '../stylings/user_show.css'

class ThreadIndex extends React.Component {
  
  componentDidMount() {
    this.props.requestUserThreads(this.props.user.id)
  }

  listThread() {
    if (this.props.threads.length === 0)
      return 'loading threads';
  
    const sortedThreads = this.props.threads.sort(function(a, b) {
      var keyA = new Date(a.updatedAt), keyB = new Date (b.updatedAt);
      if (keyA < keyB) return 1;
      else return -1;
    });
    this.props.updateCount('CC', sortedThreads.length)
    return sortedThreads.map(thread => 
       <ThreadIndexItem key={thread.id} thread={thread}/>
    )
  }

  render() {
  
    return (
      <div className="usershow-item-container">
        <div className="usershow-item-title" >Past Conversation of {this.props.user.username}</div>
        <div className="usershow-item">
        {
          this.listThread()
        }
        </div>
      </div>
    )
  }
}

export default ThreadIndex;