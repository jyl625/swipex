import React from "react";


class ThreadCommentListItem extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const {comment, className} = this.props

    return (
      <div className={className}>
        <div>
          {comment.content}
        </div>
      </div>
    )
  }
}

export default ThreadCommentListItem;