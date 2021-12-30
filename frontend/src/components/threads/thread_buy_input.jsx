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
    
    // const buyOfferPrice = (thread.buyerOffer) ?
    //   thread.buyerOffer : thread.sellPost.askPrice

    //NEED REVIEW FROM JAMES
    let buyOfferPrice
    if (this.state.buyerOffer) 
      buyOfferPrice = parseFloat(this.state.buyerOffer).toFixed(2)
    else if (thread.buyerOffer) {
      buyOfferPrice = thread.buyerOffer
    } else {
      buyOfferPrice = (thread.sellerOffer) ?
        thread.sellerOffer : thread.sellPost.askPrice
    }

    const updatePrompt = (this.state.updated !== 0) ? <div>sending</div> : null;

    return (
      <div>
        <span onClick={this.props.closeModal} className="input-close-x">X</span>
        <div className="user-offer-input">
          <div>
            <h1>Offer to buy at</h1>
          </div>
          <div className="offer-input-box">
            <input
              type="number"
              // defaultValue={parseFloat(buyOfferPrice).toFixed(2)}
              value={parseFloat(buyOfferPrice).toFixed(2)}
              step="0.01"
              onChange={this.handleInput("buyerOffer")}
            />
          </div>
          <button onClick={this.handleBuyerOffer}>
            Send
          </button>
          <div>
            {updatePrompt}
          </div>
        </div>
      </div>
    )
  }
}

export default ThreadBuyInput;