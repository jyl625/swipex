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
    console.log(this.props.threadType)
    console.log(filteredThreads);
    const sortedThreads = filteredThreads.sort(function(a, b) {
      var keyA = new Date(a.updatedAt), keyB = new Date (b.updatedAt);
      if (keyA < keyB) return 1;
      else return -1;
    });
    // const countType = (this.props.threadType === 'Past') ? 'PC' : 'CC';
    // if (!this.state.countUpdated) {
    //   this.props.updateCount(countType, sortedThreads.length)
    //   this.setState({
    //     countUpdated: true
    //   })
    // }
    return sortedThreads.map(thread => 
       <ThreadIndexItem key={thread._id} thread={thread}/>
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