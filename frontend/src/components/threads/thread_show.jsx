import React from "react";


class ThreadShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestThread(this.props.match.params.threadId)
  }

  render(){
    if (!this.props.threads) return null

    return(
      <div>
        this is thread show
      </div>
    )
  }
}

export default ThreadShow;