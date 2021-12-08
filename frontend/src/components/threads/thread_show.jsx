import React from "react";

import ThreadCommentListItem from "./thread_comment_list_item";


class ThreadShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestThread(this.props.match.params.threadId);
  }

  render(){
    if (!this.props.thread) return null;

    const {thread, currentUser} = this.props

    const otherUser = (thread.buyer.username === currentUser.username) ? thread.seller : thread.buyer

    console.log(thread.comments)

    const commentList = thread.comments.map((comment,i)=>(
      <div key={i}>
        <ThreadCommentListItem
          key={i}
          comment={comment}
          otherUser={otherUser}
        />
      </div>
    ))

    return(
      <div>
        
        <div>
          <h1>
            Chatting with {otherUser.username}
          </h1>
        </div>
          
        <div>
          {commentList}
        </div>
      </div>
    )
  }
}

export default ThreadShow;