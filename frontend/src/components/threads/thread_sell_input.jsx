import React from "react";

class ThreadSellInput extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    
    // debugger

    return (
      <div>
        <span onClick={this.props.closeModal} className="close-x">X</span>
        this is the sell input modal
      </div>
    )
  }
}

export default ThreadSellInput;