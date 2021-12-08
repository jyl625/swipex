import React from "react";

import ThreadCommentListItem from "./thread_comment_list_item";


class ThreadShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      comment: "",
      updated: 0
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.requestThread(this.props.match.params.threadId);
  }

  componentDidUpdate(prevProps, prevState){
    // debugger
    if (this.state.updated !== prevState.updated) {
      this.props.requestThread(this.props.match.params.threadId);
    }
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }


  handleSubmit(e){
    e.preventDefault();
    const newComment = {
      commentor: this.props.currentUser._id,
      conversation: this.props.thread._id,
      content: this.state.comment
    }
    // this.setState({ updated: !this.state.updated })
    this.props.createComment(newComment)
      .then(res => {
        this.setState({
          comment: "",
          updated: this.state.updated + 1
        })
      })
  }



  render(){
    if (!this.props.thread) return null;

    const {thread, currentUser} = this.props

    const otherUser = (thread.buyer.username === currentUser.username) ? thread.seller : thread.buyer

    const commentList = thread.comments.map((comment,i)=>{
      // debugger
      return (
        <ThreadCommentListItem
          key={i}
          comment={comment}
          className={(comment.commentor === currentUser.id) ? "currentUser" : "otherUser"}
        />
    )})

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

        <form onSubmit={this.handleSubmit}>
          <label>Comment
            <input type="text" value={this.state.comment} onChange={this.handleInput("comment")} />
          </label>

          <input type="submit" value="Send"/>
        </form>
      </div>
    )
  }
}

export default ThreadShow;