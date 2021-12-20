import React from "react";

class ThreadSellInput extends React.Component {
  constructor(props){
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleSellerOffer = this.handleSellerOffer.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  handleSellerOffer(e) {
    e.preventDefault();
    const conversation = Object.assign({}, this.props.thread)
    conversation["sellerOffer"] = this.state.sellerOffer;
    this.props.updateThread(conversation)
      .then((res) => {
        this.setState({ updated: this.state.updated + 1 })
      })
  }

  render(){
    
    // debugger
    const {thread} = this.props;

    const sellOfferPrice = (thread.sellerOffer) ?
      thread.sellerOffer : thread.sellPost.askPrice

    return (
      <div>
        <span onClick={this.props.closeModal} className="close-x">X</span>
        this is the sell input modal
        <div className="user-offer-input">
          <div>
            <h1>Offer to sell at</h1>
          </div>
          <div className="offer-input-box">
            <input
              type="number"
              defaultValue={parseFloat(sellOfferPrice)}
              step="0.01"
              onChange={this.handleInput("sellerOffer")}
            />
          </div>
          <button onClick={this.handleSellerOffer}>
            Send
          </button>
        </div>
      </div>
    )
  }
}

export default ThreadSellInput;