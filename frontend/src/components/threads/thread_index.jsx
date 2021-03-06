import React from 'react';
import ThreadIndexItem from './thread_index_item';

import '../stylings/reset.css'
import '../stylings/user_show.css'

class ThreadIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.state = ({
    //   countUpdated: false
    // })
  }
  
  componentDidMount() {
    // this.props.requestUserThreads(this.props.user.id)
    // .then(() => this.props.requestUserSwipes(this.props.user.id)
    // .then(() => this.setState({ loaded: true }))
    // )
  }

  listThread() {

    let filteredThreads = this.props.threads.filter(thread => {
        if (thread.sellPost)
          return thread.sellPost.open
        else
          return false
    })
    // debugger

    //old CODE
    // this.props.swipes.forEach(swipe => {
    //   // console.log(swipe)
    //   if ((this.props.threadType === 'Past' && !swipe.open) || (this.props.threadType === 'Current' && swipe.open)) {
    //     // console.log(this.props.threads)
    //       this.props.threads.forEach(thread => {
    //         // console.log(thread.sellPost === swipe._id)
    //       if (thread.sellPost === swipe._id) {
    //         filteredThreads.push(thread)
    //       }
    //     })
    //   }
        
    // });

    const sortedThreads = filteredThreads.sort(function(a, b) {
      var keyA = new Date(a.updatedAt), keyB = new Date (b.updatedAt);
      if (keyA < keyB) return 1;
      else return -1;
    });
    const countType = (this.props.threadType === 'Past') ? 'PC' : 'CC';
    // if (!this.state.countUpdated) {
    //   // this.props.updateCount(countType, sortedThreads.length)
    //   this.setState({
    //     countUpdated: true
    //   })
    // }
    // console.log(sortedThreads)
    if (sortedThreads.length === 0)
      return 'No threads yet';
    return sortedThreads.map(thread => 
       <ThreadIndexItem 
        key={thread._id} 
        thread={thread} 
        threadType={this.props.threadType}
        currentUser={this.props.currentUser}
      />
    )
  }

  // render() {
  //   let title;
  //   if (this.props.threadType === 'Past')
  //     title = (<div className="usershow-item-title" >Closed Threads</div>)
  //     // title = (<div className="usershow-item-title" >Past Chats of {this.props.user.username}</div>)
  //   else
  //     title = (<div className="usershow-item-title" >Open Threads</div>)
  //     // title = (<div className="usershow-item-title" >Open Chats of {this.props.user.username}</div>)

  //   return (
  //     <div className="usershow-item-container">
  //       {title}
  //       <div className="usershow-item">
  //       {
  //         this.listThread()
  //       }
  //       </div>
  //     </div>
  //   )
  // }
  render() {
    if (!Array.isArray(this.props.swipes)) 
      return null
    
    let title;
    if (this.props.threadType === 'Past')
      title = (<div className="usershow-item-title" >Closed Threads</div>)
      // title = (<div className="usershow-item-title" >Past Chats of {this.props.user.username}</div>)
    else
      title = (<div className="usershow-item-title" >Open Threads</div>)
      // title = (<div className="usershow-item-title" >Open Chats of {this.props.user.username}</div>)

    // console.log("count: ", document.getElementById("test-container").children.length)  
    return (
      <div className="usershow-item-container">
        {title}
        <div id="test-container" className="usershow-item">
        {
          this.listThread()
        }
        </div>
      </div>
    )
  }
}

export default ThreadIndex;