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
          // this.props.closeModal()
            this.setState({ updated: 1 })
            setTimeout(this.props.closeModal, 1000)
          })
      })
  }

  render(){

    const capitalize = (string) => {
      return string[0].toUpperCase() + string.slice(1)
    }

    const parseTimeString = (timeStr) => {
      const dateObj = new Date(timeStr)
      const dateString = dateObj.toLocaleString("en-US", {
        timeZone: "America/Los_Angeles",
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
      const timeString = dateObj.toLocaleTimeString("en-US", {
        timeZone: "America/Los_Angeles",
        hour: '2-digit',
        minute: '2-digit'
      })
      return `${dateString} at ${timeString}`
    }

    const parseTimeStringShort = (timeStr) => {
      const dateObj = new Date(timeStr)
      const dateString = dateObj.toLocaleString("en-US", {
        timeZone: "America/Los_Angeles",
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
      const timeString = dateObj.toLocaleTimeString("en-US", {
        timeZone: "America/Los_Angeles",
        hour: '2-digit',
        minute: '2-digit'
      })
      return `${dateString} at ${timeString}`
    }
    
    const {thread} = this.props;

    const updatePrompt = (this.state.updated !== 0) ? <div>confirming</div> : null;

    const sellPrice = (thread.sellerOffer) ? thread.sellerOffer : thread.sellPost.askPrice

    return (
      <div>
        <div className="thread-page-swipe-details">
          <div className="thread-page-swipe-details-top">
            <h1>
              $ {Number(thread.sellPost.askPrice).toFixed(2)}
            </h1>
            <h2>
              {capitalize(thread.sellPost.mealType)}
            </h2>
            <h2>
              {(thread.sellPost.cafeId.name).toUpperCase()} @ {thread.sellPost.cafeId.location}
            </h2>
            <h2>
              Meet @ {parseTimeString(thread.sellPost.meetingTime)}
            </h2>
          </div>
          <div className="stripe-container">
            <div className="stripe"></div>
          </div>
          <h3>
            Post expires:  {thread.sellPost.expiration}
          </h3>
          <h3>
            Post created: {parseTimeStringShort(thread.sellPost.timeCreated)}
          </h3>
        </div>
        <span onClick={this.props.closeModal} className="confirm-close-x">X</span>
        <div className="user-offer-confirm-details">
          <div className="user-offer-confirm-prompt">
            Buy this swipe for ${Number(sellPrice).toFixed(2)}?
          </div>
          <div className="user-offer-confirm-btn">
            <button onClick={this.handleBuyConfirm}>Confirm Purchase</button>
          </div>
          <div className="user-offer-confirming-prompt">
            {updatePrompt}
          </div>
        </div> 
      </div>
    )
  }
}

export default ThreadBuyConfirm;