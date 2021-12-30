import React from "react";


class ThreadSellInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sellerOffer: null,
      updated: 0,
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSellerOffer = this.handleSellerOffer.bind(this);
  }

  handleInput(type) {
    return (e) => {
      // debugger
      this.setState({ [type]: e.target.value });
    }
  }

  handleSellerOffer(e) {
    e.preventDefault();
    const conversation = Object.assign({}, this.props.thread)
    conversation["sellerOffer"] = this.state.sellerOffer;
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
    
    // const sellOfferPrice = (thread.sellerOffer) ?
    //   thread.sellerOffer : thread.sellPost.askPrice

    //NEED REVIEW FROM JAMES
    let sellOfferPrice
    if (this.state.sellerOffer) 
      sellOfferPrice = parseFloat(this.state.sellerOffer).toFixed(2)
    else {
      sellOfferPrice = (thread.sellerOffer) ?
        thread.sellerOffer : thread.sellPost.askPrice
    }

    const updatePrompt = (this.state.updated !== 0) ? <div>sending</div> : null;

    return (
      <div className="user-offer-input-wrapper">
        <span onClick={this.props.closeModal} className="input-close-x">X</span>
        <div className="user-offer-input">
          <div>
            <h1>Offer to sell at</h1>
          </div>
          <div className="offer-input-box">
            <input
              type="number"
              // defaultValue={parseFloat(sellOfferPrice).toFixed(2)}
              value={parseFloat(sellOfferPrice).toFixed(2)}
              step="0.01"
              onChange={this.handleInput("sellerOffer")}
            />
          </div>
          <button onClick={this.handleSellerOffer}>
            Send
          </button>
          <div className="user-offer-input-prompt">
            {updatePrompt}
          </div>
        </div>
      </div>
    )
  }
}

export default ThreadSellInput;