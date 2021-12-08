import React from "react";


class ThreadCommentListItem extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const {comment, otherUser} = this.props
    return (
      <div>
        {comment.content}
      </div>
    )
  }
}

export default ThreadCommentListItem;