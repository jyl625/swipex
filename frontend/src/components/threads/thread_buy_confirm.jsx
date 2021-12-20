import React from "react";


class ThreadBuyConfirm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // buyerOffer: null,
      updated: 0,
    }
    this.handleBuyConfirm = this.handleBuyConfirm.bind(this);
  }

  handleBuyConfirm(e) {
    e.preventDefault();
    const closePrice = (this.props.thread.sellerOffer) ? this.props.thread.sellerOffer : this.props.thread.sellPost.askPrice;
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
          <button onClick={this.handleBuyConfirm}>Confirm Purchase</button>
        </div>
      </div>
    )
  }
}

export default ThreadBuyConfirm;