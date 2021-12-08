import React from 'react';
import ThreadIndexItem from './thread_index_item';

class ThreadIndex extends React.Component {
 
  componentDidMount() {
    this.props.requestUserThreads(this.props.user.id);
  }

  render() {
    console.log(this.props.threads);
    if (Object.keys(this.props.threads).length === 0)
      return 'loading threads';
    return (
      <div>
        <h3>List of Sellposts from {this.props.user.username}</h3>
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