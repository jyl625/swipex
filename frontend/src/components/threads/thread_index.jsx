import React from 'react';
import ThreadIndexItem from './thread_index_item';

class ThreadIndex extends React.Component {
 
  componentDidMount() {
    this.props.requestUserThreads(this.props.user.id);
  }

  render() {
    if (Object.keys(this.props.threads).length === 0)
      return 'loading threads';
    console.log(this.props.threads)
    return (
      <div>
        <h1>Past Conversation of {this.props.user.username}</h1>
        <div>
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