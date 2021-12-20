import React from "react";


class ThreadBuyInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      buyerOffer: null,
      updated: 0,
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleBuyerOffer = this.handleBuyerOffer.bind(this);
  }

  handleInput(type) {
    return (e) => {
      // debugger
      this.setState({ [type]: e.target.value });
    }
  }

  handleBuyerOffer(e) {
    e.preventDefault();
    const conversation = Object.assign({}, this.props.thread)
    conversation["buyerOffer"] = this.state.buyerOffer;
    this.props.updateThread(conversation)
    .then((res) => {
      // debugger
      this.props.requestThread(res.data._id)
        // debugger
        // this.setState({ updated: this.state.updated + 1 })
        this.setState({ updated: 1 })
        setTimeout(this.props.closeModal, 1000)
      })
  }

  render(){
    
    const {thread} = this.props;
    
    const buyOfferPrice = (thread.buyerOffer) ?
      thread.buyerOffer : thread.buyPost.askPrice

    const updatePrompt = (this.state.updated !== 0) ? <div>Offer updated</div> : null;

    return (
      <div>
        <span onClick={this.props.closeModal} className="close-x">X</span>
        <div className="user-offer-input">
          <div>
            <h1>Offer to buy at</h1>
          </div>
          <div className="offer-input-box">
            <input
              type="number"
              defaultValue={parseFloat(buyOfferPrice)}
              step="0.01"
              onChange={this.handleInput("buyerOffer")}
            />
          </div>
          <div>
            {updatePrompt}
          </div>
          <button onClick={this.handleBuyerOffer}>
            Send
          </button>
        </div>
      </div>
    )
  }
}

export default ThreadBuyInput;