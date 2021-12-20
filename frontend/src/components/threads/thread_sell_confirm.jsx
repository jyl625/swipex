import React from "react";


class ThreadSellConfirm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // sellerOffer: null,
      updated: 0,
    }
    this.handleSellConfirm = this.handleSellConfirm.bind(this);
  }

  handleSellConfirm(e) {
    e.preventDefault();
    const closePrice = (this.props.thread.buyerOffer) ? this.props.thread.buyerOffer : this.props.thread.sellPost.askPrice;
    const newExchange = {
      closePrice: closePrice,
      sellPost: this.props.thread.sellPost._id,
      seller: this.props.thread.buyer._id,
      buyer: this.props.thread.seller._id
    }
    // debugger
    this.props.createNewExchange(newExchange)
      .then(res => {
        // debugger
        const conversation = Object.assign({}, this.props.thread)
        conversation["deal"] = closePrice;
        this.props.updateThread(conversation)
          .then(res => {
          // debugger
          this.props.requestThread(res.data._id)
          this.props.closeModal()
          })
      })
  }

  render(){
    
    const {thread} = this.props;

    // const updatePrompt = (this.state.updated !== 0) ? <div>Offer updated</div> : null;

    return (
      <div>
        <span onClick={this.props.closeModal} className="close-x">X</span>
        <div className="user-offer-confirm">
          <button onClick={this.handleSellConfirm}>Confirm Sell</button>
        </div>
      </div>
    )
  }
}

export default ThreadSellConfirm;