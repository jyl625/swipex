import React from 'react';
import ThreadIndexItem from './thread_index_item';

class ThreadIndex extends React.Component {
 
  componentDidMount() {
    this.props.requestUserThreads(this.props.user);
  }

  render() {
    console.log(this.props.threads);
    return (
      <div>
      {
        this.props.threads.map(thread => (
          <ThreadIndexItem key={thread.id} thread={thread}/>
        ))
      }
      </div>
    )
  }
}

export default ThreadIndex;