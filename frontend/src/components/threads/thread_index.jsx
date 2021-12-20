import React from 'react';
import ThreadIndexItem from './thread_index_item';

import '../stylings/reset.css'
import '../stylings/user_show.css'

class ThreadIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      countUpdated: false
    })
  }
  
  componentDidMount() {
    // this.props.requestUserThreads(this.props.user.id)
    // .then(() => this.props.requestUserSwipes(this.props.user.id)
    // .then(() => this.setState({ loaded: true }))
    // )
  }

  listThread() {
    if (this.props.threads.length === 0)
      return 'loading threads';
    let filteredThreads = [];
    console.log(this.props.threads.length)
    // debugger
    this.props.swipes.forEach(swipe => {
      // console.log(swipe)
      if ((this.props.threadType === 'Past' && !swipe.open) || (this.props.threadType === 'Current' && swipe.open)) {
        // console.log(this.props.threads)
          this.props.threads.forEach(thread => {
            // console.log(thread.sellPost === swipe._id)
          if (thread.sellPost === swipe._id) {
            filteredThreads.push(thread)

          }
        })
      }
        
    });
    // console.log(this.props.threadType)
    // console.log(filteredThreads);
    const sortedThreads = filteredThreads.sort(function(a, b) {
      var keyA = new Date(a.updatedAt), keyB = new Date (b.updatedAt);
      if (keyA < keyB) return 1;
      else return -1;
    });
    const countType = (this.props.threadType === 'Past') ? 'PC' : 'CC';
    if (!this.state.countUpdated) {
      this.props.updateCount(countType, sortedThreads.length)
      this.setState({
        countUpdated: true
      })
    }
    console.log(sortedThreads)
    return sortedThreads.map(thread => 
       <ThreadIndexItem 
        key={thread._id} 
        thread={thread} 
        threadType={this.props.threadType}
        currentUser={this.props.currentUser}
      />
    )
  }

  render() {
    let title;
    if (this.props.threadType === 'Past')
      title = (<div className="usershow-item-title" >Past Chats</div>)
      // title = (<div className="usershow-item-title" >Past Chats of {this.props.user.username}</div>)
    else
      title = (<div className="usershow-item-title" >Open Chats</div>)
      // title = (<div className="usershow-item-title" >Open Chats of {this.props.user.username}</div>)

    return (
      <div className="usershow-item-container">
        {title}
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